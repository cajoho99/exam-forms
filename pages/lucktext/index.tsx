import type { NextPage } from 'next'
import { Button, Select } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const {Option} = Select

const Home: NextPage = () => {
  return (
    <>
      <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select>
      <h1>Lucktext</h1>
      <form action="">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut fringilla       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> leo sit amet vehicula. 
        In ut purus ultricies, varius quam at, posuere odio. 
        Aliquam fermentum elit sed ex volutpat interdum. 
        Nunc eget elit et       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> posuere rutrum id nec libero. 
        Integer mattis ultrices elementum. 
        Nulla fermentum gravida mauris. 
        Duis sollicitudin ante in purus accumsan placerat. 
        Nam pretium ante eu semper euismod. 
        Nunc sem orci, egestas in magna id, pellentesque sagittis tellus. 
        Vivamus venenatis lobortis risus eu fringilla. 
        Vestibulum pulvinar leo mauris, eu tincidunt massa rutrum eu. 
        Donec       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> lacinia finibus. 
        Sed tincidunt laoreet massa sed venenatis. 
        Sed elementum sapien nisl, sit amet dictum augue congue ac. 
        Donec massa nisl, pellentesque vel iaculis non, cursus a leo.
        </p>
        <p>
        Aliquam eget ipsum et turpis posuere tempus. 
        Integer dignissim vulputate diam nec eleifend. 
        Vestibulum sit amet condimentum erat. 
        Phasellus arcu neque,       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> vitae ex vitae, semper consequat nibh. Nulla gravida quam felis, a auctor purus blandit sed. 
        Phasellus scelerisque erat at sagittis fringilla. 
        In ultrices elit diam, quis tincidunt tortor gravida et. 
        Nam rhoncus, neque ac accumsan tempus, metus justo pulvinar ipsum, quis euismod arcu velit et risus. 
        Nulla sagittis pulvinar risus, quis venenatis lorem egestas a. 
        Sed libero nunc,       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> nec porta eu, vehicula in metus. Sed molestie elit lorem, et posuere nisi luctus sit amet. 
        Nullam a elit elementum lorem luctus dapibus. 
        Cras ac velit et mi facilisis vestibulum. 
        Nullam non dui lobortis nisi rhoncus vulputate. 
        Nunc       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> nibh ut turpis pulvinar, vel finibus est laoreet.
        </p>
        <p>
        Mauris a lectus vel ipsum maximus dignissim et at nulla. 
        Cras       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> pulvinar dui. 
        Maecenas tempus imperdiet ante at dignissim. 
        Curabitur lacinia molestie mauris ac condimentum. 
        Vivamus sed feugiat sem, in dictum leo. 
        Maecenas luctus dolor sed mi tincidunt condimentum. 
        Nulla non lectus       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> lectus accumsan imperdiet a in sem. 
        Suspendisse feugiat dolor sed tempus volutpat. 
        Fusce commodo elit vel erat convallis, id pretium sapien ultrices. 
        Proin euismod eu magna eget dapibus. 
        Aliquam vestibulum euismod nunc, sit amet gravida nisl faucibus eu. 
        Pellentesque sit amet mattis metus. 
        Duis augue risus,       <Select style={{ width: 60 }}>
        <Option value="de">De</Option>
        <Option value="dem">Dem</Option>
      </Select> vitae nisi in, aliquet fermentum justo. 
        Fusce pretium, leo quis gravida pellentesque, nisl ex blandit odio, at iaculis ex dolor laoreet nisi. 
        </p>
        
        <Button type="primary">Primary Button</Button>      
      </form>
    </>

  )
}

export default Home
