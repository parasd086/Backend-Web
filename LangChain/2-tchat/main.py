import os
from langchain_core.prompts import MessagesPlaceholder, HumanMessagePromptTemplate, ChatPromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain import LLMChain
# from langchain.memory import ConversationBufferMemory, FileChatMessageHistory
from langchain.memory import ConversationSummaryMemory, FileChatMessageHistory
from dotenv import load_dotenv

load_dotenv()

chat = ChatGoogleGenerativeAI(model="gemini-pro",
   temperature=0.7)

# memory = ConversationBufferMemory(
#   chat_memory=FileChatMessageHistory("messages.json"),
#   memory_key="messages", 
#   return_messages=True
# )
memory = ConversationSummaryMemory(
  # chat_memory as of now doesnt work well with ConversationSummaryMemory
  # chat_memory=FileChatMessageHistory("messages.json"),
  memory_key="messages", 
  return_messages=True,
  llm = chat
)

prompt = ChatPromptTemplate(
  input_variables= ["content", "messages"],
  messages = [
    MessagesPlaceholder(variable_name="messages"),
    HumanMessagePromptTemplate.from_template("{content}")]
)

chain = LLMChain(
  llm=chat,
  prompt=prompt,
  memory=memory,
)

while True:
  content = input(">> ")
  result = chain({"content": content})
  print(result["text"])