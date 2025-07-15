import json
import time
import os
from backend.BusinessDatabase import BusinessDatabase
from backend.Services.postActivity import postActivity
from backend.Services.DashboardService.getDashboardData import getDashboardData

def handle_get_hub_data(data, db):
    return getDashboardData(db)

def handle_post_activity(data, db):
    postActivity(db, data.get("title", ""), data.get("subtitle", ""))
    return True

def handle_update_action(data, db):
    updateAction(db, data.get("action_name", ""))
    return True

# Map actions to handlers
ACTION_HANDLERS = {
    "get_hub_data": handle_get_hub_data,
    "post_communication": handle_post_activity,
    "update_action": handle_update_action,
}

def handle_json_file(filepath, output_filepath, db):
    try:
        with open(filepath, 'r') as f:
            data_list = json.load(f)
            if isinstance(data_list, dict):
                data_list = [data_list]
            for data in data_list:
                action = data.get("action")
                handler = ACTION_HANDLERS.get(action)
                if handler:
                    response = handler(data, businessDb)
                    with open(output_filepath, "w") as out_f:
                        json.dump(response, out_f)
    except Exception as e:
        print(f"Error processing file {filepath}: {e}")

def listen_for_json_updates(filepath, output_filepath, db):
    last_mtime = None
    while True:
        try:
            if not os.path.exists(filepath):
                raise Exception()
            mtime = os.path.getmtime(filepath)
            if last_mtime is not None and mtime < last_mtime:
                raise Exception()
            handle_json_file(filepath, db)
            last_mtime = mtime
        except Exception as e:
            time.sleep(1)


