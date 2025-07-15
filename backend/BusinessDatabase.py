class BusinessDatabase():
    actions : Dict[str, str]
    activity: List [Tuple[str,str]] 
    platforms: List[Tuple[str, bool]]    

    def __init__(self):
        self.actions = {
            "Add website notice": "INACTIVE",
            "Pause orders": "INACTIVE",
            "Cancel orders": "INACTIVE",
            "Disable preorders": "INACTIVE:",
        }
        self.activity = []
        self.platforms = [
            ("Facebook",  True),
            ("Instagram", True),
            ("Google", False),
            ("Yelp", False),
        ]
        
