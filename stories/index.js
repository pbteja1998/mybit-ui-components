import React from 'react';
import { storiesOf } from '@storybook/react';
import Img from "../packages/ui.img/src";
import Address from "../packages/ui.address/src";
import AccountInfo from "../packages/ui.account-info/src";

storiesOf('Img', module)
    .add('with src and alt', () => (
        <Img src="https://via.placeholder.com/350x150" alt="sample imag"/>
    ));

storiesOf('Address', module)
    .add('with userName', () => (
        <Address userName="0xA91BDAF22" className="classname" />
    ))
    .add('without userName', () => (
        <Address className="classname" />
    ))
;

storiesOf('Account Info', module)
    .add('with myBitBalance, ethBalance, userName', () => (
        <AccountInfo myBitBalance="20" ethBalance="8" userName="0xDA2F8123" />
    ))
    .add('without userName', () => (
        <AccountInfo myBitBalance="20" ethBalance="8" />
    ))
    .add('without ethBalance', () => (
        <AccountInfo myBitBalance="20" userName="0xDA2F8123" />
    ))
    .add('without any props', () => (
        <AccountInfo />
    ));