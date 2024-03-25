from fastapi import APIRouter, status, HTTPException
from fastapi.responses import ORJSONResponse


V1_GET_DEMO_MESSAGE = "/webapi/v1/demo/message"


router = APIRouter(tags=["Demo"], default_response_class=ORJSONResponse)


@router.get(
    path=V1_GET_DEMO_MESSAGE,
    status_code=status.HTTP_200_OK,
    responses={
        status.HTTP_200_OK: {
            "description": "Get demo message",
        },
        status.HTTP_500_INTERNAL_SERVER_ERROR: {
            "description": "Internal server error"
        }
    }
)
async def get_demo_message():
    try:
        return ORJSONResponse(
                status_code=status.HTTP_200_OK,
                content=(
                    {
                        "message": f"Hello from the FastAPI!"
                    }
                )
            )
        
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

