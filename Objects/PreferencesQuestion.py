class PreferencesQuestion:
    def __init__(self, question, options):
        self.question = question
        self.options = options

    def get_question(self):
        return self.question

    def get_options(self):
        return self.options

    def __str__(self):
        return f"Question: {self.question}, Options: {self.options}"