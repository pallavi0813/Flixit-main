import React from 'react'
import CardSlider from './CardSlider';
import styled from "styled-components";

const Slider = React.memo(({ movies }) => {
    const getMoviesFromRange = (from, to) => {
        return movies.slice(from, to);
    };

  return (
    <Container>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0, 10)} />
        <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
        <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20, 30)} />
        <CardSlider title="Popular On Netflix" data={getMoviesFromRange(30, 40)} />
        <CardSlider title="Action Movies" data={getMoviesFromRange(40, 50)} />
        <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </Container>
  )
});

export default Slider

const Container = styled.div``;
