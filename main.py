from typing import List
from fastapi import FastAPI, Depends
from pydantic import BaseModel
from uuid import uuid4
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import create_engine, Column, String, BigInteger, desc, FLOAT
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from config import settings
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

SQLALCHEMY_DATABASE_URL = f"postgresql://{settings.DATABASE_USERNAME}:{settings.DATABASE_PASSWORD}@{settings.DATABASE_HOSTNAME}:{settings.DATABASE_PORT}/{settings.DATABASE_NAME}"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class Country(Base):
    __tablename__ = "countries"

    id = Column(String, primary_key=True)
    entity = Column(String)
    code = Column(String)
    year = Column(String)
    annual_co2_emissions = Column(BigInteger)

class CountryPopulation(Base):
    __tablename__ = "world_population"

    id = Column(String, primary_key=True)
    entity = Column(String)
    code = Column(String)
    year = Column(String)
    population = Column(BigInteger)

class CountryFossilFuel(Base):
    __tablename__ = "fossil_fuels"

    id = Column(String, primary_key=True)
    entity = Column(String)
    code = Column(String)
    year = Column(String)
    fossil_fuels_twh = Column(FLOAT)

class GlobalTemperature(Base):
    __tablename__ = "global_temperatures"

    id = Column(String, primary_key=True)
    year = Column(String)
    temp_celsius = Column(FLOAT)

class WorldCo2Data(Base):
    __tablename__ = "world_co2_data"

    id = Column(String, primary_key=True)
    iso_code = Column(String)
    entity = Column(String)
    year = Column(String)
    co2 = Column(FLOAT, nullable=True)
    co2_per_capita = Column(FLOAT, nullable=True)
    trade_co2 = Column(FLOAT, nullable=True)
    cement_co2 = Column(FLOAT, nullable=True)
    cement_co2_per_capita = Column(FLOAT, nullable=True)
    coal_co2 = Column(FLOAT, nullable=True)
    coal_co2_per_capita = Column(FLOAT, nullable=True)
    flaring_co2 = Column(FLOAT, nullable=True)
    flaring_co2_per_capita = Column(FLOAT, nullable=True)
    gas_co2 = Column(FLOAT, nullable=True)
    gas_co2_per_capita = Column(FLOAT, nullable=True)
    oil_co2 = Column(FLOAT, nullable=True)
    oil_co2_per_capita = Column(FLOAT, nullable=True)
    other_industry_co2 = Column(FLOAT, nullable=True)
    other_co2_per_capita = Column(FLOAT, nullable=True)
    co2_growth_prct = Column(FLOAT, nullable=True)
    co2_growth_abs = Column(FLOAT, nullable=True)
    co2_per_gdp = Column(FLOAT, nullable=True)
    co2_per_unit_energy = Column(FLOAT, nullable=True)
    consumption_co2 = Column(FLOAT, nullable=True)
    consumption_co2_per_capita = Column(FLOAT, nullable=True)
    consumption_co2_per_gdp = Column(FLOAT, nullable=True)
    cumulative_co2 = Column(FLOAT, nullable=True)
    cumulative_cement_co2 = Column(FLOAT, nullable=True)
    cumulative_coal_co2 = Column(FLOAT, nullable=True)
    cumulative_flaring_co2 = Column(FLOAT, nullable=True)
    cumulative_gas_co2 = Column(FLOAT, nullable=True)
    cumulative_oil_co2 = Column(FLOAT, nullable=True)
    cumulative_other_co2 = Column(FLOAT, nullable=True)
    trade_co2_share = Column(FLOAT, nullable=True)
    share_global_co2 = Column(FLOAT, nullable=True)
    share_global_cement_co2 = Column(FLOAT, nullable=True)
    share_global_coal_co2 = Column(FLOAT, nullable=True)
    share_global_flaring_co2 = Column(FLOAT, nullable=True)
    share_global_gas_co2 = Column(FLOAT, nullable=True)
    share_global_oil_co2 = Column(FLOAT, nullable=True)
    share_global_other_co2 = Column(FLOAT, nullable=True)
    share_global_cumulative_co2 = Column(FLOAT, nullable=True)
    share_global_cumulative_cement_co2 = Column(FLOAT, nullable=True)
    share_global_cumulative_coal_co2 = Column(FLOAT, nullable=True)
    share_global_cumulative_flaring_co2 = Column(FLOAT, nullable=True)
    share_global_cumulative_gas_co2 = Column(FLOAT, nullable=True)
    share_global_cumulative_oil_co2 = Column(FLOAT, nullable=True)
    share_global_cumulative_other_co2 = Column(FLOAT, nullable=True)
    total_ghg = Column(FLOAT, nullable=True)
    ghg_per_capita = Column(FLOAT, nullable=True)
    total_ghg_excluding_lucf = Column(FLOAT, nullable=True)
    ghg_excluding_lucf_per_capita = Column(FLOAT, nullable=True)
    methane = Column(FLOAT, nullable=True)
    methane_per_capita = Column(FLOAT, nullable=True)
    nitrous_oxide = Column(FLOAT, nullable=True)
    nitrous_oxide_per_capita = Column(FLOAT, nullable=True)
    population = Column(FLOAT, nullable=True)
    gdp = Column(FLOAT, nullable=True)
    primary_energy_consumption = Column(FLOAT, nullable=True)
    energy_per_capita = Column(FLOAT, nullable=True)
    energy_per_gdp = Column(FLOAT, nullable=True)

Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class CountrySchema(BaseModel):
    id: str
    entity: str
    code: str
    year: str
    annual_co2_emissions: int


@app.get("/countries/{country_name}")
def getAllYearsByCountryName(country_name: str, db: Session = Depends(get_db)):
    table = db.query(Country).filter(Country.entity == country_name).all()
    return { "data": table }

@app.get("/years/{year}")
def getAllCountriesByYear(year: str, db: Session = Depends(get_db)):
    data = db.query(Country).filter(Country.year == year).all()
    return { "data": data }

@app.get("/years")
def getAllYears(db: Session = Depends(get_db)):
    data = db.query(Country.year).distinct(Country.year).group_by(Country.year).order_by(desc(Country.year)).all()
    return { "data": data }

@app.get("/temperatures")
def getAllGlobalTemperatures(db: Session = Depends(get_db)):
    temperatures = db.query(GlobalTemperature).all()
    return { "data": temperatures }

@app.get("/world")
def getAllGlobalTemperatures(db: Session = Depends(get_db)):
    data = db.query(WorldCo2Data).filter(WorldCo2Data.entity == "World", WorldCo2Data.year == "2020").all()
    return { "data": data }