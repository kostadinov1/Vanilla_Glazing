import React from 'react'
import styles from './Credits.module.css'


const Credits = () => {
  return (
    <div className={`${styles.credits}`}>
        <h1 className={`${styles.credit_title}`}>A HUGE THANK YOU!!!</h1>
        <h2 className={`${styles.credit_subtitle}`}>To the Authors and Creators of the resourses I used for the creation of this website! This website would not be possible without YOU!</h2>


        <div className={`${styles.credits_grid}`}>

            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/placeholders/measuring-01.jpg' />
                <div className={`${styles.credit_message_box}`}>
                Image by <a href="https://www.freepik.com/free-photo/service-maintenance-worker-repairing_20288642.htm#query=construction%20windows%20measuring&position=0&from_view=search&track=ais">Freepik</a>
                </div>
            </div>
            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/placeholders/measuring-02.jpg' />
                <div className={`${styles.credit_message_box}`}>
                <a href="https://www.freepik.com/free-photo/male-worker-factory_4410596.htm#query=construction%20windows%20measuring&position=48&from_view=search&track=ais">Image by senivpetro</a> on Freepik 
                
                 </div>
            </div>

            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/placeholders/production.jpg' />
                <div className={`${styles.credit_message_box}`}>
                <a href="https://www.freepik.com/free-photo/male-with-red-shirt-making-window-with-industrial-tools_17650169.htm#query=construction%20windows&position=33&from_view=search&track=ais">Image by wirestock</a> on Freepik
                </div>
            </div>


            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/placeholders/production-01.jpeg' />
                <div className={`${styles.credit_message_box}`}>
                <a href="https://www.freepik.com/free-vector/pvc-window-design-production_7437899.htm#query=pvc%20window%20production&position=7&from_view=search&track=ais">Image by macrovector</a> on Freepik
                </div>
            </div>

            <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/placeholders/contacts.jpg' />
                <div className={`${styles.credit_message_box}`}>
                <a href="https://www.freepik.com/free-photo/young-happy-businesswoman-working-computer-listening-music-headphones-office-her-colleagues-are-working-background_25743765.htm#page=6&query=contact&position=34&from_view=keyword&track=sph">Image by Drazen Zigic</a> on Freepik
                </div>
            </div>

            {/* <div className={`${styles.credit_box}`}>
                <img 
                className={`${styles.credit_img}`}
                alt='' src='/images/' />
                <div className={`${styles.credit_message_box}`}>
                 
                </div>
            </div> */}






        </div>
    </div>
  )
}

export default Credits