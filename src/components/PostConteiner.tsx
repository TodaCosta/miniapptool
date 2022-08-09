import React, { useEffect, useState } from 'react';
import { postAPI } from './../services/PostService';
import PostItem from './PostItem';
import { IPost } from './../models/IPost';

const PostConteiner = () => {
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [limit, setlimit] = useState(5);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit, //{
        //pollingInterval: 1000}
        ) //автосгенерированный хук, на основании тех энпоинтов,
    //кот. мы описываем в PostService, в () ожидает параметр, кот будем исп-ть в запросе, у нас лимит 5
    //pollingInterval аналог вэбсокета
    const [updatePost, {}] = postAPI.useUpdatePostMutation() //хук для обновления
    const [deletePost, {}] = postAPI.useDeletePostMutation() //хук для удаления

    useEffect(() => {
        // setTimeout(() => {
        //     setlimit(3)
        // }, 2000)
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <div className='post__list'>
                <button onClick={handleCreate}>Добавить пост</button>
                {/* <button onClick={() => refetch()}>Получить данные снова</button> */}
                {isLoading && <h1>Идёт загрузка</h1>}
                {error && <h1>Ошибка</h1>}
                {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>)} {/*Опциональная цепочка ?. останавливает вычисление и возвращает undefined. && через весь путь к свойству гарантирует, что все компоненты существуют (если нет, вычисление прекращается) */}
            </div>
        </div>
    )
}

export default PostConteiner;