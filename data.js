var APP_DATA = {
  "scenes": [
    {
      "id": "0-casa",
      "name": "Casa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.43950563891131544,
        "pitch": 0.1646298250594196,
        "fov": 1.5400182369481463
      },
      "linkHotspots": [
        {
          "yaw": 0.004311020329289761,
          "pitch": 0.2805249935871217,
          "rotation": 6.283185307179586,
          "target": "1-interior-casa"
        },
        {
          "yaw": 1.4548191210479633,
          "pitch": 0.23637428095768165,
          "rotation": 18.06415775814132,
          "target": "2-cancha-de-tenis"
        },
        {
          "yaw": 1.6577322869930562,
          "pitch": 0.15835883193626188,
          "rotation": 18.06415775814132,
          "target": "3-piscina"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0974930883601548,
          "pitch": -0.007950243098884258,
          "title": "Casa en el Bosque de Aculeo",
          "text": "<div>Una casa ubicada entre un bosque nativo a 40 minutos de Santiago, es un espacio ideal para desconectarte y disfrutar de la naturaleza. Totalmente equipada y hecha para alojar a tus amig@s y/o familia. Disfruta de piscina de 12 metros, estacionamientos, club house, miradores hermosos, todo rodeado de fauna como zorros y diversos tipos de pájaros.<br></div>"
        }
      ]
    },
    {
      "id": "1-interior-casa",
      "name": "Interior Casa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.45001897203790975,
          "pitch": 0.24287347548217753,
          "rotation": 0.7853981633974483,
          "target": "0-casa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1593754794715352,
          "pitch": 0.7004295924485611,
          "title": "Estufa a Leña",
          "text": "Mantén la temperatura adecuada con esta cocina a leña totalmente equipada. Incluye sacos de leña."
        },
        {
          "yaw": -3.0978749845736715,
          "pitch": 0.07688611377400534,
          "title": "Ventanales Grandes",
          "text": "Sumérgete entre la Flora y Fauna, con esta casa en el Bosque.&nbsp;"
        },
        {
          "yaw": 0.011791165200307319,
          "pitch": 0.24099535302023511,
          "title": "Comedor",
          "text": "<div>Un espacio cómodo para 8 personas en madera nativa y rústica para que disfruten un momento único.</div><div><br></div>"
        }
      ]
    },
    {
      "id": "2-cancha-de-tenis",
      "name": "Cancha de Tenis",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08703930366187151,
          "pitch": 0.35972143842491633,
          "rotation": 11.780972450961727,
          "target": "3-piscina"
        },
        {
          "yaw": -2.085428895552436,
          "pitch": 0.061393908899054495,
          "rotation": 0,
          "target": "0-casa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.11210911136203094,
          "pitch": 1.0399769050384755,
          "title": "Cancha de Tenis",
          "text": "Longitud: 23,76 metros.<div>Anchura: 8,23 metros.&nbsp;</div><div>Pasillo de Dobles: 1,37 metros.&nbsp;</div><div>Altura de la red en el centro: 0,914 metros</div>"
        },
        {
          "yaw": -1.037571545853293,
          "pitch": 0.005949202583995117,
          "title": "Entorno",
          "text": "Disfruta de una Cancha en medio de la naturaleza"
        },
        {
          "yaw": -2.5435870922852075,
          "pitch": 0.8192748953813762,
          "title": "Aros de Básquetbol",
          "text": "Transforma en una Cancha de Básquetbol este espacio"
        }
      ]
    },
    {
      "id": "3-piscina",
      "name": "Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.094453156825818,
          "pitch": 0.6954920448147384,
          "rotation": 6.283185307179586,
          "target": "2-cancha-de-tenis"
        },
        {
          "yaw": -0.9789653889405336,
          "pitch": 0.15374193202059416,
          "rotation": 0,
          "target": "0-casa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.303130254266179,
          "pitch": 1.3918867817429756,
          "title": "Piscina",
          "text": "Piscina de 12 metros por 6 con deck, espacio para llevar tus reposeras y hacer tu asado.<div><br></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
