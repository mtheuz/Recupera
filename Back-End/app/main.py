from fastapi import FastAPI
from app.routers.router import api_router
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from app.config.init_db import create_database,popular_banco
from contextlib import asynccontextmanager
import logging



logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


app = FastAPI(title="Recupera")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)
app.include_router(api_router)


@app.get("/", summary="home", tags=["home"])
def teste() -> str:
    return "teste"

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8001, log_level="info", reload=True)
