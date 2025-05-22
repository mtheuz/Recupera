from datetime import datetime
from typing import List
from sqlalchemy import Integer, String, Float, DateTime, ForeignKey, UUID
from app.utils.models import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship


class ObjectModel(Base):
    __tablename__ = 'objects'
    __table_args__ = {'extend_existing': True}
    
    nome: Mapped[str] = mapped_column(String(50), nullable=False)
    descrição: Mapped[str] = mapped_column(String(50), nullable=False)
    categoria: Mapped[str] = mapped_column(String(50), nullable=False, unique=True)
    data_encontrado: Mapped[datetime] = mapped_column(DateTime, nullable=False)
    status: Mapped[str] = mapped_column(String(14), unique=True, nullable=True)
    foto: Mapped[str] = mapped_column(String(14), unique=True, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False, default=datetime.now)
    usuario_id: Mapped[UUID] = mapped_column(UUID, ForeignKey('users.id'), nullable=False)
    usuario = relationship("UserModel", back_populates="objects")
    

