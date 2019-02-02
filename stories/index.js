import React from 'react';
import { storiesOf } from '@storybook/react';
import Img from "../packages/ui.img/src";

storiesOf('Img', module)
    .add('with src and alt', () => (
        <Img src="https://via.placeholder.com/350x150" alt="sample imag"/>
    ));