import React from 'react'
import { GlobalStyle } from 'styles/global'
import Layout from 'components/Layout'

export const wrapPageElement = ({ element }) => (
  <Layout>
    <GlobalStyle />
    {element}
  </Layout>
)