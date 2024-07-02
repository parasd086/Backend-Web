import os
import google.generativeai as genai
from langchain_core.messages import HumanMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain import PromptTemplate
from langchain import LLMChain
from langchain.chains import SequentialChain
from dotenv import load_dotenv
import argparse

load_dotenv()

sec_key = os.getenv("GOOGLE_AI_STUDIO2")
os.environ["GOOGLE_API_KEY"] = sec_key

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

parser = argparse.ArgumentParser()
parser.add_argument("--task", default="return sum of array")
parser.add_argument("--language", default="python")
args = parser.parse_args()

llm = ChatGoogleGenerativeAI(model="gemini-pro",
   temperature=0.7)

code_prompt = PromptTemplate(
    template="Write a {language} function that will {task}",
    input_variables=["language", "task"])
test_prompt = PromptTemplate(
    template="Write a test for following {language} code: \n {code}",
    input_variables=["language", "code"])

code_chain = LLMChain(llm=llm, prompt=code_prompt, output_key="code")
test_chain = LLMChain(llm=llm, prompt=code_prompt, output_key="test")

chain = SequentialChain(chains=[code_chain, test_chain],
                        input_variables=["language", "task"],
                        output_variables=["code", "test"])
result = chain({"language": args.language, "task": args.task})

print(">>>>>> GENERATED CODE:")
print(result["code"])

print(">>>>>> GENERATED TEST:")
print(result["test"])
