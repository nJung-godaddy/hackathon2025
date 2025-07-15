from backend.BusinessDatabase import BusinessDatabase

def postActivity(buisnessDb: BusinessDatabase, title: str, subtitle: str):
    businessDb.activity.append((title, subtitle))