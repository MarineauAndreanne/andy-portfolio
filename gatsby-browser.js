import React from 'react'
import { GlobalStyle } from 'styles/global'
import Layout from 'components/Layout'
import { Toaster } from 'react-hot-toast'

export const wrapPageElement = ({ element }) => (
  <>
    <Layout>
      <GlobalStyle />
      {element}
    </Layout>
    <Toaster />
  </>
)