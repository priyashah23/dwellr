class QuizQuestion implements Quiz:
    def __init__(self, question, answer):
        self.question = question
        self.answer = answer

    def get_question(self):
        return self.question

    def get_answer(self):
        return self.answer

    def check_answer(self, answer):
        return self.answer == answer