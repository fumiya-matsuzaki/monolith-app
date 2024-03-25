import uvicorn
from fastapi import FastAPI
from src.presentation.controller import (
    DemoController
)

app = FastAPI()


app.include_router(DemoController.router)


if __name__ == '__main__':
    host = '127.0.0.1'
    port = 8000
    # main: ファイル名、app: インスタンス名
    uvicorn.run('main:app', host=host, port=port, reload=True)