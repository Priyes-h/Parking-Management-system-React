from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# This is your temporary "array"
prev_trips = []

# Define structure of incoming data
class Trip(BaseModel):
    Name: str
    Email: str
    VehicleNumber: str
    ParkingAddress: str
    ParkingDuration: int

# API to save trip
@app.post("/save-trip")
def save_trip(trip: Trip):
    prev_trips.append(trip.dict())
    return {"message": "Trip saved successfully"}

# API to get all trips
@app.get("/trips")
def get_trips():
    return prev_trips 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)