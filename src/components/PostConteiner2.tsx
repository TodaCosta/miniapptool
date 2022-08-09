import React from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from './../models/IPost';

const PostConteiner2= () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(20) //автосгенерированный хук, на основании тех энпоинтов,
    //кот. мы описываем в PostService, в () ожидает параметр, кот будем исп-ть в запросе, у нас лимит 5
    const [updatePost, {}] = postAPI.useUpdatePostMutation() //хук для обновления
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    


    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    
    return (
        <div>
            <div className='post__list'>
                {isLoading && <h1>Идёт загрузка</h1>}
                {error && <h1>Ошибка</h1>}
                {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>)} {/*Опциональная цепочка ?. останавливает вычисление и возвращает undefined. && через весь путь к свойству гарантирует, что все компоненты существуют (если нет, вычисление прекращается) */}
            </div>
        </div>
    )
}

export default PostConteiner2;