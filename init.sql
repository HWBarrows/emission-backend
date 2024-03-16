CREATE TABLE IF NOT EXISTS activity (
    id UUID PRIMARY KEY,
    activity VARCHAR,
    emission VARCHAR,
    value INT,
    unit VARCHAR
);


INSERT INTO activity (id, activity, emission, value, unit) VALUES 
    ('f067c917-c957-4778-beb8-c3b4bfad5bef', 'domestic_aviation', 'carbon_dioxide', 2680, 'kg/LTO'),
    ('28ab89ff-5175-43b7-83c3-a7b84abc802f', 'domestic_aviation', 'methane', 0.3, 'kg/LTO'),
    ('6e719699-e21f-4535-b19d-e243ec2c58f2', 'domestic_aviation', 'nitrous_oxide', 0.1, 'kg/LTO'),
    ('1d553c31-35a9-4429-ae5b-52fff1249035', 'domestic_aviation', 'carbon_monoxide', 8.1, 'kg/LTO'),
    ('963fc393-4469-4713-a566-2fd06e115c09', 'domestic_aviation', 'sulphur_dioxide', 0.8, 'kg/LTO'),

;
