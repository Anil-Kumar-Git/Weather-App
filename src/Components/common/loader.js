import React from 'react'
import { Loader, Image} from 'semantic-ui-react'

const LoaderComponent= () => (
  <>
    <Loader active />
    <Image src='/assets/Images/content.gif' />
  </>
)

export default LoaderComponent