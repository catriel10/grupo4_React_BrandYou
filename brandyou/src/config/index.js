export const SidebarTitle = "Dashboard Brand You"
export const SidebarSubtitle = "New vibes.style.trendy"
const API_BASE_URL = 'http://localhost:4444/api'
export const API_PRODUCTS = `${API_BASE_URL}/products`
export const API_PRODUCTS_DETAIL = `${API_BASE_URL}/products/`
export const API_PRODUCTS_SEARCH = `${API_BASE_URL}/products/search/`
export const API_USERS = `${API_BASE_URL}/users`
export const API_USERS_DETAIL = `${API_BASE_URL}/users/`

export const PRODUCTS = [
  {
                "id": 1,
                "name": "Chaleco Cuadriculado",
                "description": "chaleco-cuadriculado",
                "price": "$1500",
                "quantity": 100,
                "discount": "10%",
                "image": "chaleco-cuadriculado.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 1
                        }
                    }
                ],
                "category": {
                    "id": 9,
                    "name": "Jacket"
                },
                "detail": "http://localhost:4444/api/products/1"
            },
            {
                "id": 2,
                "name": "Buzo Oxford",
                "description": "buzo-oxford",
                "price": "$1500",
                "quantity": 120,
                "discount": "10%",
                "image": "buzo-oxford.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 2
                        }
                    }
                ],
                "category": {
                    "id": 10,
                    "name": "Diver"
                },
                "detail": "http://localhost:4444/api/products/2"
            },
            {
                "id": 3,
                "name": "Remera Angel",
                "description": "remera-angel",
                "price": "$1500",
                "quantity": 80,
                "discount": "10%",
                "image": "remera-angel.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 3
                        }
                    }
                ],
                "category": {
                    "id": 2,
                    "name": "T-Shirt"
                },
                "detail": "http://localhost:4444/api/products/3"
            },
            {
                "id": 4,
                "name": "Chaleco Trenza",
                "description": "chaleco-trenza",
                "price": "$1500",
                "quantity": 100,
                "discount": "10%",
                "image": "chaleco-trenza.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 4
                        }
                    }
                ],
                "category": {
                    "id": 9,
                    "name": "Jacket"
                },
                "detail": "http://localhost:4444/api/products/4"
            },
            {
                "id": 5,
                "name": "Chaleco Tejido",
                "description": "chaleco-tejido",
                "price": "$1500",
                "quantity": 100,
                "discount": "10%",
                "image": "chaleco-tejido.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 5
                        }
                    }
                ],
                "category": {
                    "id": 9,
                    "name": "Jacket"
                },
                "detail": "http://localhost:4444/api/products/5"
            },
            {
                "id": 6,
                "name": "Chomba",
                "description": "chomba-gris",
                "price": "$1500",
                "quantity": 100,
                "discount": "10%",
                "image": "chomba-gris.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 6
                        }
                    }
                ],
                "category": {
                    "id": 2,
                    "name": "T-Shirt"
                },
                "detail": "http://localhost:4444/api/products/6"
            },
            {
                "id": 7,
                "name": "Manguita",
                "description": "manguita-gris",
                "price": "$1500",
                "quantity": 120,
                "discount": "10%",
                "image": "manguita-gris.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 7
                        }
                    }
                ],
                "category": {
                    "id": 3,
                    "name": "Skirt"
                },
                "detail": "http://localhost:4444/api/products/7"
            },
            {
                "id": 8,
                "name": "Saco",
                "description": "saco-marron",
                "price": "$1500",
                "quantity": 80,
                "discount": "10%",
                "image": "saco-marron.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 8
                        }
                    }
                ],
                "category": {
                    "id": 4,
                    "name": "Hoodie"
                },
                "detail": "http://localhost:4444/api/products/8"
            },
            {
                "id": 9,
                "name": "Paisana",
                "description": "paisana-roja",
                "price": "$1500",
                "quantity": 100,
                "discount": "10%",
                "image": "paisana-roja.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 9
                        }
                    }
                ],
                "category": {
                    "id": 2,
                    "name": "T-Shirt"
                },
                "detail": "http://localhost:4444/api/products/9"
            },
            {
                "id": 10,
                "name": "Remera-Morley",
                "description": "remera-morley",
                "price": "$1500",
                "quantity": 100,
                "discount": "10%",
                "image": "remera-morley.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 10
                        }
                    }
                ],
                "category": {
                    "id": 2,
                    "name": "T-Shirt"
                },
                "detail": "http://localhost:4444/api/products/10"
            },
            {
                "id": 11,
                "name": "Polera",
                "description": "polera-gris",
                "price": "$1500",
                "quantity": 120,
                "discount": "10%",
                "image": "polera-gris.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 11
                        }
                    }
                ],
                "category": {
                    "id": 2,
                    "name": "T-Shirt"
                },
                "detail": "http://localhost:4444/api/products/11"
            },
            {
                "id": 12,
                "name": "Remera Aro",
                "description": "remera-aro",
                "price": "$1500",
                "quantity": 80,
                "discount": "10%",
                "image": "remera-aro.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 12
                        }
                    }
                ],
                "category": {
                    "id": 2,
                    "name": "T-Shirt"
                },
                "detail": "http://localhost:4444/api/products/12"
            },
            {
                "id": 13,
                "name": "Jumper Cuadrille",
                "description": "jumper-cuadrille",
                "price": "$1500",
                "quantity": 100,
                "discount": "10%",
                "image": "jumper-cuadrille.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 13
                        }
                    }
                ],
                "category": {
                    "id": 5,
                    "name": "Jumper"
                },
                "detail": "http://localhost:4444/api/products/13"
            },
            {
                "id": 14,
                "name": "Jumper",
                "description": "jumper-negro",
                "price": "$1500",
                "quantity": 100,
                "discount": "10%",
                "image": "jumper-negro.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 14
                        }
                    }
                ],
                "category": {
                    "id": 5,
                    "name": "Jumper"
                },
                "detail": "http://localhost:4444/api/products/14"
            },
            {
                "id": 15,
                "name": "Remera",
                "description": "remera-mangalarga",
                "price": "$1500",
                "quantity": 120,
                "discount": "10%",
                "image": "remera-mangalarga.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 15
                        }
                    }
                ],
                "category": {
                    "id": 2,
                    "name": "T-Shirt"
                },
                "detail": "http://localhost:4444/api/products/15"
            },
            {
                "id": 16,
                "name": "Chaleco Cuadrille",
                "description": "chaleco-cuadrille",
                "price": "$1500",
                "quantity": 80,
                "discount": "10%",
                "image": "chaleco-cuadrille.jpeg",
                "colors": [
                    {
                        "id": 1,
                        "name": "Black",
                        "product_color": {
                            "color_id": 1,
                            "product_id": 16
                        }
                    }
                ],
                "category": {
                    "id": 9,
                    "name": "Jacket"
                },
                "detail": "http://localhost:4444/api/products/16"
            },
]