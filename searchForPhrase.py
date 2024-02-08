import os
import PyPDF2
import re
import tkinter as tk
from tkinter import simpledialog

def search(filePath):
    global Findings
    normalizedPhrase = phrase.lower()
    _, extension = os.path.splitext(filePath)
    if extension in validExtensions:
        try:
            with open(filePath, encoding='utf-8-sig') as file:
                content = file.readlines()
                lineNumber = 1
                for line in content:
                    if normalizedPhrase in line:
                        Findings.append("Found in: " + filePath)
                        Findings.append("Line: " + str(lineNumber))
                    lineNumber += 1
        except Exception as e:
            print(f"An error occurred: {str(e)}", file)
    elif extension == ".pdf":
            with open(filePath, 'rb') as file:
                reader = PyPDF2.PdfReader(file)
                for page_num in range(len(reader.pages)):
                    page = reader.pages[page_num]
                    text = page.extract_text()
                    normalized_text = re.sub(r'\s+', ' ', text).lower()
                    if normalizedPhrase in normalized_text:
                        actualPage = page_num + 1
                        Findings.append("Found in: " + filePath)
                        Findings.append("Page: " + str(actualPage))

def checkForPhrase(directory):
    try:
        everyTempFile = os.listdir(directory)
        for file in everyTempFile:
            filePath = os.path.join(directory, file)
            if os.path.isfile(filePath):
                search(filePath)
            if os.path.isdir(filePath):
                checkForPhrase(filePath)
    except Exception as e:
        print(f"An error occurred: {str(e)}")

def showFindings():
    root = tk.Tk()
    root.withdraw()
    feedback_window = tk.Toplevel(root)
    feedback_window.title("Findings")
    findings = '\n'.join(Findings)
    if findings == "":
        findings = "The phrase couldn't be found in any of the files within the directory."
    feedback_window.geometry("1200x800")
    feedback_label = tk.Label(feedback_window, text= findings, font=("Arial", 14))
    feedback_label.pack(pady=20)
    feedback_window.protocol("WM_DELETE_WINDOW", root.quit)  # Quit main loop on window close
    feedback_window.mainloop()
    root.destroy()

def getUserInput():
    global mainDirectory, phrase
    root = tk.Tk()
    root.withdraw()
    mainDirectory = simpledialog.askstring("Directory Entry", "Please enter the directory of the main folder.")
    phrase = simpledialog.askstring("Phrase to Search", "Please enter the phrase you want to search for.")
    root.destroy()
    

validExtensions = [".yml", ".txt"]  
Findings = []
mainDirectory, phrase = "", ""
getUserInput()
checkForPhrase(mainDirectory)
showFindings()