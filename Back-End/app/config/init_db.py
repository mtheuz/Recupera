from app.config.connection import engine
from asyncio import run
from app.utils.models import Base
from app.models.user_model import UserModel  # Importe seus modelos
from datetime import datetime
from app.security.security import get_password_hash
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import sessionmaker
import logging

# Configuração de log
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)

# Criando uma fábrica de sessões assíncronas
AsyncSessionLocal = sessionmaker(
    bind=engine, class_=AsyncSession, expire_on_commit=False
)


async def create_database():
    try:
        async with engine.begin() as conn:
            logging.info("Iniciando a recriação do banco de dados...")
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)
            logging.info("Banco de dados recriado com sucesso!")
    except Exception as e:
        logging.error(f"Erro ao recriar o banco de dados: {e}")


async def popular_banco():
    try:
        async with AsyncSessionLocal() as session:  # Usando a sessão assíncrona
            logging.info("Populando o banco de dados com dados iniciais...")
           

            await session.commit()  # Commit para salvar as alterações no banco
            logging.info("Dados iniciais inseridos com sucesso!")
    except Exception as e:
        logging.error(f"Erro ao popular o banco de dados: {e}")


async def main():
    await create_database()
    await popular_banco()


if __name__ == "__main__":
    run(main())
