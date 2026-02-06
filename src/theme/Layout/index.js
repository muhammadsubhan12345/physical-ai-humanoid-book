import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import BookChatbot from "../../components/BookChatbot/BookChatbot";

export default function LayoutWrapper(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <BookChatbot />
    </>
  );
}
