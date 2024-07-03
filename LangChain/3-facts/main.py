from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
# from langchain.embeddings import OpenAIEmbeddings
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain.vectorstores.chroma import Chroma
from dotenv import load_dotenv

load_dotenv()

# embeddings = OpenAIEmbeddings()
# emb = embeddings.embed_query("Hi There")
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
# emb = embeddings.embed_query("hello, world!")
# print(emb)

# Will first pull out 200 char and then use the next immediate separator
text_splitter = CharacterTextSplitter(separator="\n",
                                      chunk_size=200,
                                      chunk_overlap=0)

loader = TextLoader("facts.txt")
docs = loader.load_and_split(text_splitter=text_splitter)

# immediately start doing embeddings and store result in emb dir.
db = Chroma.from_documents(docs, embedding=embeddings, persist_directory="emb")

results = db.similarity_search(
    "What is an interesting fact about English Language?",
    #k=1 #how many results we want
)

for result in results:
  print('\n')
  print(result.page_content)
