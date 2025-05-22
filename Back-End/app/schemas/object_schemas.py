from app.utils.schemas import BaseModel
from typing import Annotated, List
from pydantic import Field
from pydantic import UUID4, Field

class ObjectSchema(BaseModel):
    nome: Annotated[str, Field(
        description='username do usuário',
        examples=['user_1'],
        max_length=50
    )]
    descricao: Annotated[str, Field(
        description='username do usuário',
        examples=['example@email.com'],
        max_length=50
    )]
    
    categoria: Annotated[str, Field(
        description='Nome do usuário',
        examples=['João'],
        max_length=50
    )]
    
    
    data_encontrado: Annotated[str, Field(
        description='password do usuário',
        examples=['1234'],
        max_length=14
    )]
    status: Annotated[str, Field(
        description='password do usuário',
        examples=['1234'],
        max_length=14
    )]
    foto: Annotated[str, Field(
        description='password do usuário',
        examples=['1234'],
        max_length=14
    )]
    
class UserSchemaPublic(BaseModel):
    id: Annotated[UUID4, Field(
        description='ID único do usuário',
    )]
    username: Annotated[str, Field(
        description='username do usuário',
        examples=['user_1'],
        max_length=50
    )]
    
    nome: Annotated[str, Field(
        description='Nome do usuário',
        examples=['João'],
        max_length=50
    )]
    
    
class ObjectSchemaList(BaseModel):
    users: List[UserSchemaPublic]
    
class DeleteUserResponse(BaseModel):
    detail: Annotated[str, Field(description='mensagem de deletar')]
    

    
    