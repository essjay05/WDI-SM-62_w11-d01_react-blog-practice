import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';

export default class App extends Component {
  state = {
    loading: true,
    posts: []
  }

  componentDidMount() {
    this.setState({ 
      loading: false,
      posts: [
        {
          title: "Blog Post 1",
          author: "Joy", 
          body: "Cupcake ipsum dolor sit amet. I love macaroon cookie topping cake wafer I love jelly beans. Pastry ice cream I love. Fruitcake cake topping jelly-o cupcake bonbon. Liquorice caramels powder muffin pudding dragée jujubes. Cupcake macaroon jelly beans. Dragée candy canes caramels lemon drops. Toffee I love sweet roll sweet roll macaroon oat cake lemon drops lemon drops. Tootsie roll oat cake I love caramels candy canes tootsie roll tootsie roll sesame snaps."
        },
        {
          title: "Blog Post 2",
          author: "Sean", 
          body: "Cupcake ipsum dolor sit amet. I love macaroon cookie topping cake wafer I love jelly beans. Pastry ice cream I love. Fruitcake cake topping jelly-o cupcake bonbon. Liquorice caramels powder muffin pudding dragée jujubes. Cupcake macaroon jelly beans. Dragée candy canes caramels lemon drops. Toffee I love sweet roll sweet roll macaroon oat cake lemon drops lemon drops. Tootsie roll oat cake I love caramels candy canes tootsie roll tootsie roll sesame snaps."
        },
        {
          title: "Blog Post 3",
          author: "Daniel", 
          body: "Cupcake ipsum dolor sit amet. I love macaroon cookie topping cake wafer I love jelly beans. Pastry ice cream I love. Fruitcake cake topping jelly-o cupcake bonbon. Liquorice caramels powder muffin pudding dragée jujubes. Cupcake macaroon jelly beans. Dragée candy canes caramels lemon drops. Toffee I love sweet roll sweet roll macaroon oat cake lemon drops lemon drops. Tootsie roll oat cake I love caramels candy canes tootsie roll tootsie roll sesame snaps."
        },
      ]
    })
  }
  
  render() {
    debugger
    let { loading, posts } = this.state;

    return (
      <main>
        <Header />
        <h1>Welcome to Joy's Blog</h1>
        <BlogPost loading={loading} posts={posts}/>
        <Footer />
      </main>
    )
  }
};