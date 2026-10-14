import jwt

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhyaWNrQGdtYWlsLmNvbSIsImlhdCI6MTc5MTgxNjk4NywiZXhwIjoxNzkxODIwNTg3fQ.WHNkOi5PNlTN9F5xat1t3mBlWtm2vXUgRpCbKqT04sc"

candidates = [
    "your-development-secret",
    "your-test-secret",
    "secret_key",
]

print("JWT segments:", len(token.split(".")))

if len(token.split(".")) != 3:
    print("Error: JWT must contain three segments.")
    raise SystemExit(1)

for secret in candidates:
    try:
        payload = jwt.decode(
            token,
            secret,
            algorithms=["HS256"],
            options={"verify_exp": False}
        )
        print("-" * 40)
        print("Working secret:", secret)
        print("Payload:", payload)
        break
    except jwt.InvalidSignatureError:
        print("Candidate did not match.")
else:
    print("No candidate matched.")