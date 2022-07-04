import { IPost } from "../../../types";

export const initialPosts: IPost[] = [

{
            author: {
                _id: 'eee',
                avatar:'https://wallpaperaccess.com/full/1267113.jpg',
                name: 'National Georgaphic'
            },
            content:'Bla bla',
            createdAt:'5 min ago',
            images:['https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg','data:image/jpeg;base64,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']
        }]