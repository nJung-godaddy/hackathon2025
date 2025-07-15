def update_action(db, action_name)
    db.actions[action_name] = "ACTIVE"
    postActivity(db, "Activated:", "Added website notice")