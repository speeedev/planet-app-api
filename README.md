This API can be accessed at https://planet-app-api.onrender.com/. I developed it for a [Flutter application](https://github.com/speeedev/Space_Explorer_App_Flutter) called Space Explorer.

Information about planets is pulled from JSON and transmitted in response to the request.

**Request**: https://planet-app-api.onrender.com/planets

**Response:**

```
[
  {
    "id": 1,
    "name": "Mercury",
    "imageUrl": "https://resmim.net/cdn/2024/07/12/WjY6to.png",
    "orderOfProximityToSun": 1,
    "shortDescription": "Smallest and hottest planet.",
    "longDescription": "Mercury is the closest planet to the Sun, experiencing extreme temperature fluctuations. It has almost no atmosphere.",
    "primaryColor": "0xFFFFB700",
    "videoUrl": "https://youtu.be/OasnhfHIlgk"
  },
  {
    "id": 2,
    "name": "Venus",
    "imageUrl": "https://resmim.net/cdn/2024/07/12/WjYne3.png",
    "orderOfProximityToSun": 2,
    "shortDescription": "Thick clouds, very hot planet.",
    "longDescription": " Venus is known for its dense atmosphere and extremely high surface temperatures. It is the hottest planet in the Solar System, with no liquid water on its surface.",
    "primaryColor": "0xFFE8D3A2",
    "videoUrl": "https://youtu.be/hUid1efPVWM"
  },
  {
    "id": 3,
    "name": "Earth",
    "imageUrl": "https://resmim.net/cdn/2024/07/12/WjYI5K.png",
    "orderOfProximityToSun": 3,
    "shortDescription": "Life-supporting blue planet.",
    "longDescription": "Earth is the only known planet to support life, with its oceans, landmasses, and atmosphere. It is the third planet from the Sun, with a unique climate and water cycle.",
    "primaryColor": "0xFF00FF26",
    "videoUrl": "https://youtu.be/KJwYBJMSbPI"
  },
  // ...
]
```
