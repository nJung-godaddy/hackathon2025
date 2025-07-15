from backend.Constants import BusinessDatabase
from backend.handler import listen_for_json_updates
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr,HttpUrl
import os
from dotenv import load_dotenv
import requests
from requests_oauthlib import OAuth1
from email.message import EmailMessage
import smtplib


businessDb = BusinessDatabase()
listen_for_json_updates('./fromFront.json', './fromBack.json', businessDb)

app = FastAPI()

def get_smtp():
    host     = os.getenv("EMAIL_HOST", "smtp.gmail.com")
    port     = int(os.getenv("EMAIL_PORT", 587))
    user     = os.getenv("EMAIL_USER")
    password = os.getenv("EMAIL_PASSWORD")
    print(password)
    if not all([host, port, user, password]):
        raise RuntimeError("Email credentials not set")
    smtp = smtplib.SMTP(host, port)
    smtp.starttls()
    smtp.login(user, password)
    return smtp

class EmailRequest(BaseModel):
    to: EmailStr
    subject: str
    body: str

class InstagramPost(BaseModel):
    image_url: HttpUrl
    caption: str

def get_oauth():
    consumer_key = os.getenv("TWITTER_API_KEY")
    consumer_secret = os.getenv("TWITTER_API_KEY_SECRET")
    access_token = os.getenv("TWITTER_ACCESS_TOKEN")
    access_secret = os.getenv("TWITTER_ACCESS_TOKEN_SECRET")
    print([consumer_key, consumer_secret, access_token, access_secret])
    if not all([consumer_key, consumer_secret, access_token, access_secret]):
        raise HTTPException(status_code=500, detail="????? ouath ??????")
    return OAuth1(consumer_key, consumer_secret, access_token, access_secret)

class EmailRequest(BaseModel):
    to: EmailStr
    subject: str
    body: str

class TwitterPost(BaseModel):
    text:str

load_dotenv(dotenv_path='.env')

@app.get("/")
async def hello_world():
    return {"message": "sdfds"}

@app.post("/twitter", summary="Post a tweet")
async def post_tweet(post: TwitterPost):
    url = "https://api.twitter.com/2/tweets"
    auth = get_oauth()
    headers = {"Content-Type": "application/json"}
    payload = {"text": post.text}

    response = requests.post(url, auth=auth, headers=headers, json=payload)
    if response.status_code != 201:
        raise HTTPException(
            status_code=response.status_code,
            detail=f"Twitter ???????????: {response.json()}"
        )
    data = response.json()
    return {"data": data.get("data", {})}

@app.post("/email", summary="Send an email")
async def send_email(req: EmailRequest):
    try:
        smtp = get_smtp()
        msg = EmailMessage()
        msg["From"]    = os.getenv("EMAIL_USER")
        msg["To"]      = req.to
        msg["Subject"] = req.subject
        msg.set_content(req.body)
        smtp.send_message(msg)
        smtp.quit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Email send failed: {e}")
    return {"status": "sent"}


@app.post("/instagram", summary="Post an image to Instagram")
async def post_instagram(post: InstagramPost):
    token   = os.getenv("IG_ACCESS_TOKEN")
    user_id = os.getenv("IG_USER_ID")  
    if not all([token, user_id]):
        raise HTTPException(status_code=500, detail="Instagram credentials not set")
    create_url = f"https://graph.facebook.com/v15.0/{user_id}/media"
    params = {
        "image_url":   str(post.image_url),  # <<< cast to str here
        "caption":     post.caption,
        "access_token": token
    }
    resp = requests.post(create_url, params=params)
    if resp.status_code != 200:
        raise HTTPException(status_code=resp.status_code,
                            detail=f"Container creation failed: {resp.json()}")
    container_id = resp.json().get("id")
