import './goodToKnow.css'
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const GoodToKnow = () => {
  const [active, setActive] = useState(null);

  const items = [
    {
      id: 1,
      title: 'How long does the coaching process take?',
      content: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      id: 2,
      title: 'What if I wanted to end my coaching engagement?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    {
      id: 3,
      title: 'Can I change through coaching?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    },
    {
      id: 4,
      title: 'How often do we meet?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.',
    }
  ];

  const toggleAccordion = (id) => {
    setActive(active === id ? null : id);
  };
  return (
    <section className='good'>
      <div className='good-header'>
        <h1>Good To Know.</h1>
        <p>Everything you need to know about the my services.</p>
      </div>
      <div className='good-content'>
      <div className="accordion">
        {items.map((item) => (
          <div key={item.id} className="accordion-item">
            <button
              aria-expanded={active === item.id}
              onClick={() => toggleAccordion(item.id)}
            >
              <span className="accordion-title">{item.title}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className="accordion-content"
              style={{
                opacity: active === item.id ? 1 : 0,
                maxHeight: active === item.id ? '9em' : 0,
              }}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className='good-footer'>
        <h2>Still have questions?</h2>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <Link to='/' className='btn'>Get in touch</Link>
      </div>
    </section>
  )
}

export default GoodToKnow
