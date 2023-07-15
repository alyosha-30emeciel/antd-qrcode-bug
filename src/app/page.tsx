'use client'
import React from 'react';
import {Input, QRCode, Space} from "antd";

export default function Home() {
  const [text, setText] = React.useState('https://ant.design/');

  return (
      <Space direction="vertical" align="center">
        <QRCode value={text || '-'} />
        <Input
            placeholder="-"
            maxLength={60}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
      </Space>
  );
}
