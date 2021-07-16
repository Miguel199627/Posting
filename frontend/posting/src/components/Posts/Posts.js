import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

export default function Posts({ setCurrentId }) {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} alignItems="stretch" spacing={3}>
                {
                    posts.map(
                        (post) => (
                            <Grid key={post._id} item xs={12} sm={6} md={6}>
                                <Post post={post} setCurrentId={setCurrentId} />
                            </Grid>
                        )
                    )
                }
            </Grid>
        )
    );
}