import React from 'react'
import Header from './Header'
import './Blog.css';
import { bool } from 'yup';
function Blog() {


  
  return (
    <>
    <Header/>
    <div id="container">
  <h1>Blog Posts</h1>
  <div className="content">
    <h2>Blog Post Number 1</h2>
    <p>
      In non odio excepturi sint eum labore voluptates vitae quia qui et
      inventore itaque rerum veniam non exercitationem delectus aut.
    </p>
    <h4>By John Doe.</h4>
    <div className="btn">
    <button>Edit</button>
    <button>Delete</button>
    </div>
  </div>
  <div className="content">
    <h2>Blog Post Number 2</h2>
    <p>
      In non odio excepturi sint eum labore voluptates vitae quia qui et
      inventore itaque rerum veniam non exercitationem delectus aut.
    </p>
    <h4>By Sávio Nascimento.</h4>
    <div className="btn">
    <button>Edit</button>
    <button>Delete</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Blog