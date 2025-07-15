import json
from backend.BusinessDatabase import BusinessDatabase

def getDashboardData(businessDb: BusinessDatabase):
    dashboard_data = {
        "actions": businessDb.actions,
        "activity": businessDb.activity,
        "platforms": businessDb.platforms,
    }

    return json.dumps(dashboard_data)