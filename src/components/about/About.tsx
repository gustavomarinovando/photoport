import { useEffect } from 'react';
import ImgOne from '../../assets/images/personal-gallery/imgOne.jpeg'
import ImgTwo from '../../assets/images/personal-gallery/imgTwo.jpeg'
import ImgThree from '../../assets/images/personal-gallery/imgThree.jpeg'
import ImgFour from '../../assets/images/personal-gallery/imgFour.jpeg'

const About = () => {
  useEffect(() => {
    document.title = "Blog | Travel with Catherine";
  })
  return (
    <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center">
       <h2 className="text-4xl text-center uppercase text-black mt-6">About</h2>
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600 p-2">
        <p className="text-base  sm:text-lg ">
          Mi nombre es Gustavo Marin, soy de Cochabamba, Bolivia. Mis hobbies incluyen la programación y la fotografía, ambos los aprendi por mi mismo y a dia de hoy lo sigo haciendo.
        </p>
        <p className="text-base  sm:text-lg ">
          He tomado fotografias y diseñado para diferentes empresas, entre estas se encuentran La Sangucheria, Tablangas, El Delicioso, Jadever y más. Debajo adjunto un par de capturas de diferentes posts donde se han utilizado mis fotografías:
        </p>
      </section>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2">

        
        <section>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feldeliciosobolivia%2Fposts%2Fpfbid0bQqvUgE5pbfqyjLWArNnRJQU5fmKsByTqgrQCCfSZqtvkZ1vNQHeMqYXpMU9VXp9l&show_text=true&width=500&is_preview=true" width="500" height="705" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        
        </section>
        <section>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02MJkURGcByTKsUCqZjrLabssLHo5K1yu2StgnGJ1n5kfP6ZRm1dfxi5LCkYzhSJt9l%26id%3D100076313136379&show_text=true&width=500&is_preview=true" width="500" height="667" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          
        </section>
        <section>
        <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61558490945660%2Fvideos%2F453380853920794%2F&show_text=false&width=560&t=0" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </section>
        <section>
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0pJVnbNnHHCV4zN5T5mdYgKYHF42gd64mpkmSTBrichMZJHUnsxYfsix8tKb2sLgEl%26id%3D100091316161220&show_text=true&width=500&is_preview=true" width="500" height="666" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </section>
      </section>
    </article>
  )
}

export default About
