from langchain_community.vectorstores import Chroma
from langchain.chains import RetrievalQA
from langchain_google_genai import ChatGoogleGenerativeAI
from redundant_filter_retriever import RedundantFilterRetriever
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv

load_dotenv()

chat = ChatGoogleGenerativeAI(model="gemini-1.5-pro-latest", temperature=0.7)
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")

db = Chroma(persist_directory="emb", embedding_function=embeddings)

retriever = RedundantFilterRetriever(embeddings=embeddings, chroma=db)

chain = RetrievalQA.from_chain_type(llm=chat,
                                    retriever=retriever,
                                    chain_type="stuff")

result = chain.run("What is an interesting fact about English Language?")

print(result)
