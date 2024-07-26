import Logo from "../assets/logotwo.png"
import imageone from "../assets/abstract.jpg"
import imagetwo from "../assets/imagetwo.jpeg"
import imagethree from "../assets/imagethree.jpg"
import imagefour from "../assets/imagefour.jpg"
import imagefive from "../assets/imagefive.jpg"
import imageeleven from "../assets/imageleven.png"
import imagenine from "../assets/imagenine.png"
import imagethirteen from "../assets/one.png"
import imagefourteen from "../assets/six.jpg"
import imagefifteen from "../assets/five.jpg"
import imageSixteen from "../assets/eight.jpg"
import imageseventeen from "../assets/seven.jpg"
import imageeighteen from "../assets/three.jpg"
import imagenineteen from "../assets/twelve.jpg"
import imageight from "../assets/imageeight.jpg"
import bgone from "../assets/bgone.jpg"
import bgtwo from "../assets/bgtwo.jpg"
import bgthree from "../assets/bgthree.jpg"
import bgFour from "../assets/bgfour.jpg"


export const asset = {
    Logo,
    bgone,
    bgtwo,
    bgthree,
    bgFour,
    imageone,
    imageight,
    imagethree,
    imagefour,
    imagefive,
    imagenine,
    imageeleven,
    imagetwo,
    imageSixteen,
    imageeighteen,
    imagefifteen,
    imagefourteen,
    imagenineteen,
    imageseventeen,
    imagethirteen,

}
export const Moviescategory = [
    {
        categorys:"All"
    },
    {
        categorys:"Horror"
    },
    {
        categorys:"Science Friction"
    },
    {
        categorys:"History"
    },
]


const data = [
    {
        "id": 1,
        "category":"History",
        "autor":"Stephen King",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
        "title": "House of Sky",
        "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        "genre": "Comedy/Drama",
        "rating": 3,
        "price": 90,
        "createdAt": "2024-07-12" // Updated date
    },
    {
        "id": 2,
        "category":"History",
        "autor":"J.R.R. Tolkien",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
        "title": "Book Lovers",
        "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        "genre": "Action/Comedy/Crime/Drama",
        "rating": 4,
        "price": 100,
        "createdAt": "2024-07-15" // Updated date
    },
    {
        "id": 3,
        "category":"History",
        "autor":"J.R.R. Tolkien",
        "features":"features",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649848581i/60435878.jpg",
        "title": "Carrie Soto Is Back",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genre": "Comedy/Drama",
        "rating": 5,
        "price": 140,
        "createdAt": "2024-07-10" // Updated date
    },
    {
        "id": 4,
        "category":"History",
        "autor":"J.R.R. Tolkien",
        "features":"features",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626710416i/58446227.jpg",
        "title": "Sea of Tranquility",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        "genre": "Comedy, Drama, Thriller",
        "rating": 4,
        "price": 250,
        "createdAt": "2024-07-14" // Updated date
    },
    {
        "id": 5,
        "category":"History",
        "autor":"J.R.R. Tolkien",
        "features":"features",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
        "title": "Hidden Pictures",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-07-11" // Updated date
    },
    {
        "id": 6,
        "category":"Science Friction",
        "autor":"George R.R. Martin",
        "features":"features",
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634068432i/59233594.jpg",
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 7,
        "autor":"J.K. Rowling",
        "category":"Science Friction",
        "cover": imageSixteen,
        "title": "Carrie Soto Is Back",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genre": "Comedy/Drama",
        "rating": 5,
        "price": 140,
        "createdAt": "2024-07-10" // Updated date
    },
    {
        "id": 8,
        "category":"Science Friction",
        "autor":"Stephen King",
        "cover": imageeighteen,
        "title": "Sea of Tranquility",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        "genre": "Comedy, Drama, Thriller",
        "rating": 4,
        "price": 250,
        "createdAt": "2024-07-14" // Updated date
    },
    {
        "id": 9,
        "category":"Science Friction",
        "autor":"J.K. Rowling",
        "cover": imageeleven,
        "title": "Hidden Pictures",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-07-11" // Updated date
    },
    {
        "id": 10,
        "category":"Science Friction",
        "autor":"R.R. Tolkien",
        "cover": imagefifteen,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 11,
        "category":"Science Friction",
        "autor":"R.R. Tolkien",
        "cover": imagefive,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 12,
        "category":"Science Friction",
        "autor":"Stephen King",
        "cover": imagefour,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 13,
        "category":"Horror",
        "autor":"George R.R. Martin",
        "cover": imagefourteen,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },

    {
        "id": 14,
        "category":"Horror",
        "autor":"George R.R. Martin",
        "cover": imagenine,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 15,
        "category":"Horror",
        "autor":"Stephen King",
        "cover": imageeleven,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 16,
        "category":"Horror",
        "autor":"George R.R. Martin",
        "cover": imagenineteen,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 17,
        "category":"Horror",
        "cover": imageeleven,
        "autor":"J.R.R. Tolkien",
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 18,
        "category":"Horror",
        "autor":"J.R.R. Tolkien",
        "cover": imageseventeen,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 19,
        "category":"Horror",
        "autor":"J.R.R. Tolkien",
        "cover": imagethirteen,
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    {
        "id": 20,
        "category":"Horror",
        "cover": imagethree,
        "autor":"J.R.R. Tolkien",
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi", 
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    
    
    
    
];

function getAllBooks() {
    return data;
}

export { getAllBooks };
