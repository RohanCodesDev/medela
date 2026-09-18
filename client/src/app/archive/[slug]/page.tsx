import React from 'react';
import { notFound } from 'next/navigation';
import TableOfContents from '@/components/TableOfContents';

interface Section {
  title: string;
  id: string;
}

interface Publication {
  title: string;
  domain: string;
  format: string;
  published_at: string;
  content: string;
  sections: Section[];
  citations: string[];
}

const publicationsDb: Record<string, Publication> = {
  'infancy-growth-development': {
    title: 'Infancy: Growth and Development',
    domain: 'Developmental Paediatrics',
    format: 'Clinical Review',
    published_at: '2026-09-18',
    sections: [
      { title: 'Motor Development & Reflexes', id: 'motor-reflexes' },
      { title: 'Primitive Reflexes', id: 'primitive-reflexes' },
      { title: 'Gross & Fine Motor Milestones', id: 'motor-milestones' },
      { title: 'Brain Development', id: 'brain-development' },
      { title: 'Mental Development', id: 'mental-development' },
      { title: 'Speech, Vision & Hearing', id: 'speech-vision-hearing' },
      { title: 'Perceptual Development: 6–12 Months', id: 'perceptual-development' },
      { title: 'Teething', id: 'teething' },
      { title: 'Physical Growth in Children', id: 'physical-growth-children' },
      { title: 'Conclusion', id: 'conclusion' },
    ],
    content: `
      <figure class="article-hero-figure">
        <img src="/images/infant_sitting_crawling.jpg" alt="Infant approximately 7 months old sitting independently" />
        <figcaption>Fig. 1 — Independent sitting, typically achieved between 6–8 months, marks a key gross motor milestone indicating sufficient core strength and postural control for unsupported balance.</figcaption>
      </figure>

      <p id="motor-reflexes">During infancy, the transition from primitive reflex-dominated movement to voluntary, purposeful motor control defines much of the first year of neurological development. Several primitive reflexes gradually mature or disappear as the cortex matures and voluntary control is established.</p>

      <h2 id="motor-reflexes-heading">Motor Development and Reflexes</h2>
      <p>During infancy, several primitive reflexes gradually mature or disappear as voluntary motor control develops:</p>
      <ul>
        <li>Swallowing reflexes and tongue movements remain relatively immature during the early months of life.</li>
        <li>The grasp reflex gradually disappears as voluntary hand control develops.</li>
        <li>The Landau reflex emerges when the infant is held in a prone position.</li>
        <li>Infants initially grasp objects with the entire hand, although grip strength may not yet be sufficient to hold objects securely.</li>
        <li>Muscle strength and motor control progressively improve.</li>
        <li>When placed in the prone position, the infant is increasingly able to raise the head and upper body.</li>
        <li>Infants become more physically active, moving their arms and attempting to reach for objects.</li>
      </ul>

      <h2 id="primitive-reflexes">Important Primitive Reflexes</h2>

      <figure class="article-center-figure">
        <img src="/images/infant_moro_reflex.jpg" alt="Clinical illustration of the Moro startle reflex in a newborn" />
        <figcaption>Fig. 2 — The Moro (startle) reflex: a sudden stimulus elicits symmetrical arm abduction with finger spreading and slight back arching, followed by adduction of the arms. Absence of this reflex at birth warrants neurological evaluation.</figcaption>
      </figure>

      <h3>1. Moro Reflex</h3>
      <p>The Moro reflex, also known as the startle reflex, is present at birth. It is elicited in response to a sudden stimulus, such as a loud noise. The infant typically responds by extending the arms and legs outward, followed by bringing the arms toward the body. Absence of this reflex may indicate a significant neurological or motor abnormality.</p>

      <h3>2. Rooting Reflex</h3>
      <p>The rooting reflex is a normal infant reflex in which stimulation of the cheek or area around the mouth causes the infant to turn the head toward the stimulus and open the mouth. This reflex assists the infant in locating the breast or nipple during feeding.</p>

      <h3>3. Babinski Reflex</h3>
      <p>The Babinski reflex is elicited by firmly stroking the sole of the infant's foot. A normal response in an infant is upward movement of the great toe accompanied by fanning of the other toes. Its presence during infancy is neurologically normal; persistence beyond infancy may indicate upper motor neuron pathology.</p>

      <h3>4. Walking (Stepping) Reflex</h3>
      <p>The walking or stepping reflex is present at birth. When the soles of an infant's feet are placed against a flat surface while the infant is supported, the infant may make stepping movements. This reflex usually disappears during the first few weeks of life and later re-emerges as voluntary walking behavior, generally toward the end of the first year.</p>

      <h3>5. Palmar Grasp Reflex</h3>
      <p>The palmar grasp reflex is present at birth and generally persists until approximately 5–6 months of age. The infant initially has a strong but involuntary grasp, which gradually becomes controlled and purposeful.</p>

      <h3>6. Tonic Neck Reflex</h3>
      <p>The tonic neck reflex occurs when the infant's head is turned to one side. The arm and, sometimes, the leg on the side toward which the head is turned extend, while the limbs on the opposite side flex. This reflex is commonly observed in newborns.</p>

      <h2 id="motor-milestones">Milestones of Gross and Fine Motor Development</h2>
      <table>
        <thead>
          <tr><th>Age</th><th>Developmental Milestones</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>6 months</strong></td><td>Grasps objects; grasps dangling objects; sits with support; attempts to crawl.</td></tr>
          <tr><td><strong>7 months</strong></td><td>Sits independently; crawls; develops improved hand–eye coordination and related abilities.</td></tr>
          <tr><td><strong>8 months</strong></td><td>Pulls to a standing position.</td></tr>
          <tr><td><strong>9 months</strong></td><td>Stands with support; crawls on the abdomen; participates in games such as pat-a-cake.</td></tr>
          <tr><td><strong>11 months</strong></td><td>Stands and walks with support; builds a tower using two cubes.</td></tr>
        </tbody>
      </table>

      <h2 id="brain-development">Brain Development</h2>

      <div class="article-image-pair">
        <figure>
          <img src="/images/infant_brain_development.jpg" alt="Cross-section illustration of newborn brain showing synaptic connections" />
          <figcaption>Fig. 3 — The newborn brain at approximately 25% of adult weight undergoes explosive synaptic growth during the first three years of life. The quality and quantity of environmental stimulation directly influence the density and strength of neural connections formed.</figcaption>
        </figure>
        <div class="article-image-pair-text">
          <div>
            <p>The first year of life is a particularly important period for brain development.</p>
            <ul>
              <li>The amount and quality of stimulation received by an infant influence the formation and strengthening of neural connections and synapses.</li>
              <li>The development of synaptic connections occurs rapidly during early childhood, with substantial synaptic development taking place during the first three years of life.</li>
              <li>The environment plays a significant role in brain development of infants.</li>
              <li>Appropriate visual stimulation promotes curiosity, attention, concentration, and engagement with the environment.</li>
              <li>Brain growth occurs rapidly during infancy. Although the brain is approximately 25% of adult weight at birth, by approximately 6 months it reaches about 50% of adult brain weight.</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 id="mental-development">Mental Development</h2>
      <p>During infancy, significant cognitive and behavioural changes take place. The infant's experience of the world evolves from passive sensation toward active, intentional exploration:</p>
      <ul>
        <li>The infant explores the environment through the eyes and ears and increasingly uses the hands, feet, and mouth to investigate objects.</li>
        <li>The infant gradually recognises familiar people and objects and begins to anticipate familiar events.</li>
        <li>Awareness of unfamiliar people, objects, and situations develops progressively.</li>
        <li>The infant develops definite preferences for familiar people and objects.</li>
        <li>Infants may begin to imitate simple movements.</li>
        <li>At this stage, attention is generally focused on one activity or object at a time.</li>
      </ul>

      <h2 id="speech-vision-hearing">Speech, Vision, Hearing, and Other Developmental Milestones</h2>
      <table>
        <thead>
          <tr><th>Age</th><th>Motor Development</th><th>Speech Development</th><th>Vision & Hearing</th><th>Other Development</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>4–6 weeks</strong></td>
            <td>—</td>
            <td>Vocalization is not yet clearly differentiated.</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td><strong>6–8 weeks</strong></td>
            <td>—</td>
            <td>Begins to vocalize.</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td><strong>3 months</strong></td>
            <td>Maintains the prone position; grasp reflex is beginning to diminish.</td>
            <td>Produces various sounds.</td>
            <td>Follows a dangling toy from side to side; turns the head toward sounds.</td>
            <td>Squeals appropriately with pleasure; begins to discriminate between different smiles.</td>
          </tr>
          <tr>
            <td><strong>5 months</strong></td>
            <td>Holds the head steadily; reaches for and obtains objects.</td>
            <td>Enjoys vocal interaction and vocal play.</td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td><strong>6 months</strong></td>
            <td>Transfers objects from one hand to the other; sits erect with support; uses a palmar grasp; rolls from prone to supine position.</td>
            <td>Produces repeated syllabic sounds such as "mama" and "dada."</td>
            <td>Localises the source of sounds.</td>
            <td>May demonstrate stranger anxiety or shyness.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="perceptual-development">Perceptual Development During Infancy: 6–12 Months</h2>
      <p>Newborns are highly sensitive to touch and pain. They generally demonstrate a preference for sweet tastes and certain pleasant odors. Preferences for salty tastes develop later and may contribute to the acceptance of solid foods.</p>
      <p>Maternal dietary experiences during pregnancy may influence an infant's early odor preferences through exposure to substances present in the amniotic fluid. Newborns are also capable of distinguishing a wide range of speech sounds and may show particular responsiveness to their mother's voice or to the sounds of their native language.</p>
      <p>Vision is one of the least mature sensory systems at birth. During the first few months of life, the eyes and visual centers of the brain undergo rapid development. Focusing ability, visual acuity, scanning, tracking, and color perception improve progressively. As the infant develops a more organised perceptual understanding of the environment, visual information can be processed in an increasingly systematic manner.</p>

      <figure class="article-wide-figure">
        <img src="/images/infant_sensory_development.jpg" alt="Infographic illustrating the six senses in infant perceptual development" />
        <figcaption>Fig. 4 — Infant sensory development spans six interconnected modalities. Each sense undergoes rapid maturation during the first year, with critical periods for language tuning (hearing) and pattern recognition (vision) occurring primarily in the 6–12 month window.</figcaption>
      </figure>

      <h3>Milestones in the Development of the Senses</h3>
      <table>
        <thead>
          <tr><th>Age</th><th>Touch</th><th>Taste & Smell</th><th>Balance</th><th>Hearing</th><th>Vision</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>6–8 months</strong></td>
            <td>Frequently explores objects through mouthing.</td>
            <td>Taste preferences can be modified through experience and exposure.</td>
            <td>Optical flow perception becomes more precise.</td>
            <td>Becomes sensitive to the syllabic stress patterns of the infant's native language.</td>
            <td>Perceives patterns such as human walking movements and facial expressions as meaningful wholes.</td>
          </tr>
          <tr>
            <td><strong>9–12 months</strong></td>
            <td>—</td>
            <td>—</td>
            <td>Develops anticipatory postural adjustments to maintain balance and prevent falls.</td>
            <td>Begins to screen out sounds not relevant to the native language and perceives larger speech units important for understanding meaning.</td>
            <td>Can extract pattern information even when a complete visual image is not available, such as from a moving light or a partially visible picture.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="teething">Teething</h2>

      <figure class="article-center-figure">
        <img src="/images/infant_teething.jpg" alt="Infant approximately 6 months old showing first emerging lower incisor" />
        <figcaption>Fig. 5 — The first tooth most commonly appears at approximately 6 months of age, typically a lower central incisor. Timing varies considerably between individuals, ranging from 3 months to 1 year of age.</figcaption>
      </figure>

      <p>Teething refers to the developmental period during which an infant's primary teeth develop and erupt through the gums. The timing of teething varies considerably among infants. The first tooth may appear as early as approximately 3 months of age, whereas in some infants, tooth eruption may not occur until around 1 year of age. Teething may sometimes be associated with symptoms such as nasal congestion. The first tooth most commonly appears at approximately 6 months of age.</p>

      <h2 id="physical-growth-children">Physical Growth and Developmental Changes in Children</h2>

      <h3>Factors Influencing Variations in Body Size</h3>

      <h4>1. Family Influences</h4>
      <p>Family influences may be both hereditary and environmental. Genetic factors contribute to differences in children's height, weight, and overall body size. Environmental influences arise from conditions experienced during both the prenatal and postnatal periods. Factors such as maternal nutrition, stress, smoking, and other conditions affecting the prenatal environment may influence fetal growth and subsequently affect the child's growth and ultimate body size.</p>

      <h4>2. Nutrition</h4>
      <p>Adequate nutrition is essential for normal growth and development. Well-nourished children generally achieve optimal height and physical growth earlier than children who are inadequately nourished.</p>

      <h4>3. Emotional Disturbances</h4>
      <p>Persistent emotional stress and psychological disturbances may adversely affect physical growth. Chronic stress can increase the production of adrenal steroids, which may interfere with the production or action of growth-promoting hormones. Consequently, prolonged emotional disturbances may delay normal growth and prevent children from achieving their full growth potential.</p>

      <h4>4. Sex</h4>
      <p>There are generally differences in body size and growth patterns between boys and girls. Boys tend to be taller and heavier than girls during many stages of childhood; however, these differences change during puberty, particularly around 12–15 years of age, when girls may temporarily experience more rapid growth.</p>

      <h4>5. Endocrine Function</h4>
      <p>The endocrine system plays an important role in regulating physical growth and development. Hormones produced by endocrine glands influence processes such as skeletal growth, body composition, metabolism, and maturation. Abnormalities in endocrine function may therefore result in altered growth patterns.</p>

      <h2 id="conclusion">Conclusion</h2>
      <p>Infancy refers to the period from birth to approximately 2 years of age. Developmental milestones provide a systematic framework for observing and assessing an infant's progress over time. Development occurs across multiple domains, including physical growth, motor skills, cognitive abilities, sensory development, language, and social behaviour.</p>
      <p>The attainment of developmental milestones varies among individual children and may be influenced by genetic, environmental, nutritional, and other factors. Growth and development during infancy occur rapidly, reflecting progressive maturation of the child's physical and neurological systems.</p>
    `,
    citations: [
      'Hurlock, E.B. (1978). Child Development. McGraw-Hill.',
      'Behrman, R.E., Kliegman, R.M., & Jenson, H.B. (2004). Nelson Textbook of Pediatrics. Saunders.',
      'Illingworth, R.S. (1987). The Development of the Infant and Young Child. Churchill Livingstone.',
      'Kuhl, P.K. (2004). Early language acquisition: cracking the speech code. Nature Reviews Neuroscience.',
      'WHO Child Growth Standards (2006). World Health Organization, Geneva.',
    ]
  },
  'infant-physical-development': {
    title: 'Physical Growth and Developmental Changes from Infancy to Adolescence',
    domain: 'Developmental Paediatrics',
    format: 'Clinical Review',
    published_at: '2026-09-18',
    sections: [
      { title: 'Growth & Development', id: 'growth-development' },
      { title: 'Differences: Growth vs Development', id: 'differences' },
      { title: 'Factors Influencing Growth', id: 'factors' },
      { title: 'Physical Growth in Infancy', id: 'physical-growth-infancy' },
      { title: 'Weight & Height Milestones', id: 'weight-height' },
      { title: '0–6 Months', id: 'zero-six-months' },
      { title: '6–12 Months', id: 'six-twelve-months' },
      { title: 'General Characteristics', id: 'general-characteristics' },
      { title: 'Reflexes in Infancy', id: 'reflexes' },
      { title: 'Motor Skills', id: 'motor-skills' },
      { title: 'Motor Development', id: 'motor-development' },
      { title: 'Key Summary', id: 'key-summary' },
    ],
    content: `
      <figure class="article-hero-figure">
        <img src="/images/infant_head_measurement.jpg" alt="Clinician measuring a newborn's head circumference" />
        <figcaption>Head circumference measurement at birth is a key clinical indicator of neurological development and brain growth. Normal range: 33–38 cm.</figcaption>
      </figure>

      <p id="growth-development">Physical growth and development are two interrelated but distinct concepts central to understanding child health. Growth refers to the measurable increase in body size — height, weight, and organ dimensions — while development encompasses the progressive refinement of function, behaviour, and maturity. Together they define the trajectory from newborn to adolescent.</p>

      <h2 id="growth-development-heading">1. Growth and Development</h2>

      <h3>Physical Growth</h3>
      <p>Physical growth refers to the increase in body size, height, weight, and the size of various organs. Growth from birth to adolescence generally occurs in two distinct phases:</p>
      <p><strong>First phase — Birth to 2 years:</strong> Growth is rapid during this period. Although the rate gradually decreases with age, birth weight generally doubles by approximately 4–5 months and triples by about one year.</p>
      <p><strong>Second phase — 2 years to the onset of puberty:</strong> Growth occurs at a relatively constant rate through regular annual increments.</p>
      <p>Growth is not a continuous, steady process. Instead, it occurs in periods of rapid growth followed by slower phases. From infancy to adulthood, an individual may increase substantially in body size, although the exact pattern varies between individuals.</p>

      <h3>Development</h3>
      <p>Development is a continuous and progressive process that begins at conception and continues throughout life. According to Hurlock, development involves a progressive series of orderly and coherent changes directed toward achieving maturity. Although children generally pass through similar developmental stages, the rate and timing of development may vary among individuals.</p>
      <p>Development occurs across several domains, including gross motor development, fine motor development, language development, cognitive development, social development, and emotional development.</p>
      <p>Infancy refers to the earliest period of life, beginning after birth and extending through the first year. Physical development during infancy is influenced by heredity, nutrition, environmental conditions, and overall health. Optimal growth and development require adequate health and appropriate environmental support.</p>

      <h2 id="differences">2. Differences Between Growth and Development</h2>
      <table>
        <thead>
          <tr><th>Growth</th><th>Development</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Growth is primarily quantitative and external in nature.</td>
            <td>Development is primarily qualitative and internal in nature.</td>
          </tr>
          <tr>
            <td>Growth generally stops after physical maturity is reached.</td>
            <td>Development is a continuous process that progresses throughout life.</td>
          </tr>
          <tr>
            <td>Growth can be measured directly.</td>
            <td>Development is assessed indirectly through observation and evaluation of abilities.</td>
          </tr>
          <tr>
            <td>Growth can be expressed in terms of height, weight, length, body circumference, and other physical measurements.</td>
            <td>Development can be assessed through changes in abilities such as intelligence, language, motor skills, and social behaviour.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="factors">3. Factors Influencing Growth and Development</h2>
      <p>Several interconnected factors influence the growth and development of children:</p>

      <h3>1. Heredity</h3>
      <p>Genetic characteristics inherited from parents influence physical growth, body structure, height, maturation, and various developmental characteristics.</p>

      <h3>2. Nutrition</h3>
      <p>Adequate nutrition is essential for normal physical growth, brain development, immunity, and overall health. Nutritional deficiencies may result in growth retardation and developmental difficulties.</p>

      <h3>3. Disease and Health Conditions</h3>
      <p>Chronic illnesses such as chronic nephritis, malnutrition, and congenital heart disease may interfere with normal growth and development.</p>

      <h3>4. Environment</h3>
      <p><strong>Physical environment:</strong> Inadequate sunlight, poor sanitation, and unhygienic conditions may adversely affect growth. <strong>Seasonal variations</strong> may influence the rate of growth. <strong>Psychological environment:</strong> Relationships with parents, teachers, caregivers, and other individuals influence emotional and developmental outcomes.</p>

      <h3>5. Socioeconomic Conditions</h3>
      <p>Socioeconomic circumstances, particularly poverty, may contribute to inadequate nutrition and limited access to healthcare, thereby affecting growth and development.</p>

      <h3>6. Intrauterine Environment</h3>
      <p>Conditions during pregnancy have an important influence on the child's subsequent growth and development.</p>

      <h3>7. Endocrine Factors</h3>
      <p>Hormonal disorders may interfere with normal growth. For example, hypothyroidism and hypopituitarism can result in growth retardation.</p>

      <h3>8. Emotional Factors</h3>
      <p>Emotional security and supportive relationships are important determinants of healthy physical and psychological development. Lack of love, care, and security during childhood may adversely affect personality development and emotional maturity.</p>

      <h3>9. Socio-Psychological Factors</h3>
      <p>Social and psychological experiences play an important role in the overall development and adjustment of children.</p>

      <h2 id="physical-growth-infancy">4. Physical Growth and Developmental Changes During Infancy</h2>
      <p>Infancy is the early period of life following birth, during which rapid physical, neurological, and developmental changes occur. The newborn period generally refers to the first 28 days of life. A newborn may be classified as <strong>preterm</strong> (born before 37 completed weeks of gestation) or <strong>full-term</strong> (born at approximately 37–42 weeks of gestation).</p>

      <h2 id="weight-height">5. Approximate Weight and Height During Infancy</h2>
      <p>The following figures are approximate and may vary between individual infants.</p>
      <table>
        <thead>
          <tr><th>Age</th><th>Weight</th><th>Length / Height</th></tr>
        </thead>
        <tbody>
          <tr><td>6 months</td><td>7.5 kg</td><td>66 cm</td></tr>
          <tr><td>9 months</td><td>8.5 kg</td><td>70.5 cm</td></tr>
          <tr><td>1 year</td><td>9 kg</td><td>74 cm</td></tr>
        </tbody>
      </table>

      <figure class="article-wide-figure">
        <img src="/images/infant_growth_timeline.jpg" alt="Infant growth milestones from 0 to 12 months infographic" />
        <figcaption>Fig. 2 — Key physical milestones during the first 12 months of life, from reflexes at birth through fontanelle closure at one year. Values are approximations; individual variation is expected.</figcaption>
      </figure>

      <h2 id="zero-six-months">6. Physical Development: 0–6 Months</h2>

      <h3>A. 1–4 Months</h3>
      <p>During the first four months, the following physical changes commonly occur:</p>
      <ul>
        <li>The head and chest circumference become approximately equal, relative to the abdomen.</li>
        <li>Head circumference increases by approximately 2 cm per month during the first two months, followed by approximately 1.5 cm per month until four months — reflecting continuing brain growth.</li>
        <li>The infant continues to breathe predominantly using the abdominal muscles.</li>
        <li>The posterior fontanelle generally closes by approximately the second month; the anterior fontanelle remains open.</li>
        <li>The skin remains sensitive and may be easily irritated.</li>
        <li>The legs may appear slightly bowed.</li>
        <li>The eyes begin to move together, allowing the development of binocular vision.</li>
      </ul>

      <h3>B. 4–6 Months</h3>
      <p>Important changes during this period include:</p>

      <div class="article-image-pair">
        <figure>
          <img src="/images/infant_baby_fat.jpg" alt="Infant showing characteristic subcutaneous fat distribution" />
          <figcaption>Fig. 3 — Subcutaneous fat accumulates noticeably in the cheeks, upper arms, and neck between 4–6 months, contributing to thermoregulation and the classic "baby fat" appearance.</figcaption>
        </figure>
        <div class="article-image-pair-text">
          <ul>
            <li>The first teeth may begin to erupt, commonly the upper and lower central incisors.</li>
            <li>The gums may become red and swollen.</li>
            <li>Increased drooling, chewing, and mouthing of objects may occur.</li>
            <li>Physiological bowing of the legs gradually decreases as the infant grows.</li>
            <li>Subcutaneous fat increases, particularly during the later weeks of fetal life and early infancy.</li>
            <li>Fat may become more noticeable in the cheeks, upper arms, and neck.</li>
            <li>Increased body fat contributes to maintaining a relatively stable body temperature.</li>
            <li>The infant's permanent eye colour becomes more apparent during this period.</li>
          </ul>
        </div>
      </div>

      <h2 id="six-twelve-months">7. Physical Development: 6–12 Months</h2>

      <h3>A. 6–8 Months</h3>
      <ul>
        <li>Head and chest circumferences are generally approximately equal.</li>
        <li>Head circumference increases by approximately 1 cm per month until around 6–7 months, reflecting continuing brain growth.</li>
        <li>Birth weight generally doubles by around six months.</li>
        <li>Respiration remains predominantly abdominal, with the respiratory rate varying according to the infant's activity.</li>
        <li>The first teeth usually include the lower central incisors, followed by other primary teeth.</li>
        <li>Increased drooling, chewing, and mouthing of objects are common.</li>
        <li>The legs may initially appear bowed, but this generally decreases as the infant develops.</li>
        <li>Increased subcutaneous fat produces the characteristic appearance commonly described as <em>"baby fat."</em></li>
      </ul>

      <h3>B. 8–12 Months</h3>
      <ul>
        <li>The rate of increase in head circumference gradually slows as the infant approaches one year.</li>
        <li>Birth weight generally triples by approximately 12 months.</li>
        <li>The infant continues to use the abdominal muscles during respiration, with respiratory rate varying according to activity.</li>
        <li>The anterior fontanelle begins to close.</li>
        <li>Additional primary teeth erupt, including the upper incisors.</li>
      </ul>

      <h2 id="general-characteristics">8. General Physical Characteristics of Infancy</h2>
      <ul>
        <li>Infancy is characterised by a rapid rate of physical growth, particularly during the first two years.</li>
        <li>Length increases considerably during the first year.</li>
        <li>Weight generally doubles during the first several months and triples by approximately one year.</li>
        <li>The cranial region is proportionally larger than the remainder of the body.</li>
        <li>The infant's chin is relatively small in comparison with the rest of the face.</li>
        <li>The arms and legs are proportionally shorter in relation to the head and trunk.</li>
        <li>Head circumference at birth is approximately 33–38 cm (13–15 inches) and gradually increases during infancy.</li>
        <li>The rate of increase in head circumference becomes slower after approximately one year.</li>
      </ul>

      <h2 id="reflexes">9. Reflexes in Infancy</h2>
      <p>A reflex is an innate, automatic response to a particular type of stimulus. Reflexes are especially prominent in newborns and represent some of their earliest organised patterns of behaviour. With maturation and experience, many infant reflexes gradually diminish and provide a foundation for the development of voluntary, coordinated, and learned movements.</p>

      <figure class="article-center-figure">
        <img src="/images/infant_babinski_reflex.jpg" alt="Clinical illustration of the Babinski reflex in an infant" />
        <figcaption>Fig. 4 — The Babinski reflex: stroking the lateral sole of the foot produces dorsiflexion of the great toe and fanning of the other toes. Its presence during infancy is neurologically normal; persistence beyond infancy may indicate upper motor neuron pathology.</figcaption>
      </figure>

      <h3>Common Infant Reflexes</h3>
      <table>
        <thead>
          <tr><th>Reflex</th><th>Stimulus</th><th>Response</th><th>Approximate Age</th><th>Significance</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Swimming reflex</strong></td>
            <td>Infant is placed face-down in water.</td>
            <td>The infant makes paddling and kicking movements resembling swimming.</td>
            <td>Up to approximately 6 months</td>
            <td>May provide a protective response in water.</td>
          </tr>
          <tr>
            <td><strong>Moro reflex</strong></td>
            <td>Sudden movement, sound, or slight dropping of the head while supported.</td>
            <td>The infant extends the arms and legs, arches the back, and subsequently brings the limbs toward the body.</td>
            <td>Approximately 4–6 months</td>
            <td>Considered an early protective/evolutionary response.</td>
          </tr>
          <tr>
            <td><strong>Babinski reflex</strong></td>
            <td>The sole of the foot is stroked from the heel toward the toes.</td>
            <td>The toes fan outward and the foot may turn inward.</td>
            <td>Present during infancy</td>
            <td>Useful as an indicator of neurological development.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="motor-skills">10. Motor Skills</h2>
      <p>Motor skills are movements produced through the coordinated activity of the brain, nervous system, and muscles. They are broadly classified into two categories:</p>

      <figure class="article-center-figure">
        <img src="/images/infant_motor_skills.jpg" alt="Infant approximately 8 months old sitting upright and reaching outward" />
        <figcaption>Fig. 5 — An infant at approximately 8 months demonstrating sitting balance (gross motor) and purposeful reaching (fine motor) — two hallmark milestones of the 6–8 month developmental window.</figcaption>
      </figure>

      <h3>Gross Motor Skills</h3>
      <p>Gross motor skills involve the larger muscles of the body, particularly those of the arms, legs, and trunk. Examples include: crawling, running, jumping, sitting, and walking.</p>

      <h3>Fine Motor Skills</h3>
      <p>Fine motor skills involve smaller, more precise movements. Examples include: reaching, grasping, holding objects, pointing, and manipulating small objects.</p>

      <h2 id="motor-development">11. Motor Development</h2>
      <p>Motor development refers to the progressive acquisition of control over body movements through the coordinated functioning of the nervous system, nerve centres, and muscles. Early motor activity is strongly influenced by reflexes and involuntary movements present at birth. As the nervous system matures, the infant gradually develops voluntary control and coordinated movement.</p>
      <p>Motor development is a continuous process that begins with reflexive movements and gradually progresses toward purposeful, smooth, and coordinated actions.</p>

      <h3>Early Motor Development</h3>
      <p>During early infancy, rooting and sucking reflexes are well developed. Reflexive movements gradually become more organised, and as neurological maturation occurs, the infant gains increasing control over posture and movement. These early reflexes and motor responses provide a foundation for the development of more complex voluntary motor skills.</p>

      <h2 id="key-summary">12. Key Summary</h2>
      <p>Growth refers mainly to measurable physical changes such as height, weight, and body size, whereas development refers to progressive changes in abilities, functions, behaviour, and maturity. Normal growth and development depend on a combination of heredity, adequate nutrition, good health, appropriate environmental conditions, socioeconomic circumstances, hormonal factors, intrauterine influences, and emotional and social support. Infancy is a period of particularly rapid growth and is marked by significant changes in body proportions, brain growth, dentition, reflexes, and motor abilities.</p>
    `,
    citations: [
      'Hurlock, E.B. (1978). Child Development. McGraw-Hill.',
      'WHO Child Growth Standards (2006). World Health Organization, Geneva.',
      'Illingworth, R.S. (1987). The Development of the Infant and Young Child. Churchill Livingstone.',
      'Behrman, R.E., Kliegman, R.M., & Jenson, H.B. (2004). Nelson Textbook of Pediatrics. Saunders.',
    ]
  },
  'metabolic-flexibility': {
    title: 'Metabolic Flexibility in Fasting States',
    domain: 'Nutritional Biochemistry',
    format: 'Clinical Review',
    published_at: '2026-08-15',
    sections: [
      { title: 'Introduction', id: 'introduction' },
      { title: 'The Role of Mitochondria', id: 'mitochondria' },
      { title: 'Clinical Implications', id: 'clinical-implications' },
      { title: 'Citations', id: 'citations' },
    ],
    content: `
      <p id="introduction">Metabolic flexibility refers to the capacity of the body to switch between utilizing carbohydrates and fats depending on availability and demand. In the context of fasting, this flexibility becomes paramount for maintaining cognitive function and energy levels.</p>
      <h2 id="mitochondria">The Role of Mitochondria</h2>
      <p>Mitochondrial health is the cornerstone of this flexibility. Dysfunctional mitochondria struggle to upregulate beta-oxidation when glucose is scarce, leading to energy deficits.</p>
      <h2 id="clinical-implications">Clinical Implications</h2>
      <p>Interventions aimed at improving metabolic flexibility often include intermittent fasting regimens, ketogenic diets, and specific exercise protocols designed to enhance mitochondrial biogenesis.</p>
    `,
    citations: [
      'Smith, J. et al. (2025). Mitochondrial dynamics in fasting. Journal of Metabolic Research.',
      'Doe, J. (2024). Cognitive implications of beta-oxidation. Neurochemistry International.',
    ]
  },
  'neuroplasticity-habit': {
    title: 'Neuroplasticity and Habit Formation',
    domain: 'Behavioral Psychology',
    format: 'Long-form Essay',
    published_at: '2026-08-20',
    sections: [
      { title: 'Introduction', id: 'introduction' },
      { title: 'Synaptic Plasticity', id: 'synaptic-plasticity' },
      { title: 'Cognitive Interventions', id: 'cognitive-interventions' },
      { title: 'Citations', id: 'citations' },
    ],
    content: `
      <p id="introduction">Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections throughout life. This adaptability plays a central role in habit formation, allowing repetitive behaviors to become automated routines.</p>
      <h2 id="synaptic-plasticity">Synaptic Plasticity and Habit Loops</h2>
      <p>Habits are encoded within the basal ganglia, specifically the striatum. As a behavior is repeated, synaptic strength increases between neurons in this pathway, creating a consolidated 'chunk' of behavior.</p>
      <h2 id="cognitive-interventions">Cognitive Interventions</h2>
      <p>To disrupt established neural loops, cognitive interventions target trigger events and introduce competing behaviors, forcing the brain to form alternative pathways.</p>
    `,
    citations: [
      'Hebb, D.O. (1949). The Organization of Behavior. Wiley.',
      'Graybiel, A.M. (2008). Habits, rituals, and the evaluative brain. Annual Review of Neuroscience.',
    ]
  },
  'microbiome-depression': {
    title: 'The Microbiome-Gut-Brain Axis in Depression',
    domain: 'The Gut-Brain Axis',
    format: 'Meta-Analysis',
    published_at: '2026-08-25',
    sections: [
      { title: 'Introduction', id: 'introduction' },
      { title: 'Vagus Nerve Signaling', id: 'vagus-nerve-signaling' },
      { title: 'Clinical Findings', id: 'clinical-findings' },
      { title: 'Citations', id: 'citations' },
    ],
    content: `
      <p id="introduction">The bidirectional communication network between the central nervous system and the gastrointestinal tract, known the gut-brain axis, has emerged as a key factor in neuropsychiatric conditions, particularly depression.</p>
      <h2 id="vagus-nerve-signaling">Vagus Nerve and Cytokine Signalling</h2>
      <p>Gut microbes produce neurotransmitters and short-chain fatty acids (SCFAs) that stimulate the vagus nerve. Additionally, systemic inflammation driven by dysbiosis can disrupt the blood-brain barrier.</p>
      <h2 id="clinical-findings">Clinical Findings</h2>
      <p>Meta-analyses of clinical trials show that specific probiotic strains (e.g., Lactobacillus and Bifidobacterium) can alleviate depressive symptoms by lowering systemic cortisol.</p>
    `,
    citations: [
      'Cryan, J.F. et al. (2019). The Microbiome-Gut-Brain Axis. Physiological Reviews.',
      'Foster, J.A. (2013). Gut-brain axis: how the microbiome influences anxiety and depression. Trends in Neurosciences.',
    ]
  }
};

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pub = publicationsDb[slug];

  if (!pub) {
    notFound();
  }

  return (
    <div className="flex relative w-full">
      <div className="flex-grow max-w-4xl p-12">
        <header className="border-b border-divider pb-12 mb-12">
          <div className="flex gap-4 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#172F22]/60 border border-[#214232]/30 px-3 py-1 font-sans">{pub.domain}</span>
            <span className="text-xs uppercase tracking-widest text-[#172F22]/60 border border-[#214232]/30 px-3 py-1 font-sans">{pub.format}</span>
          </div>
          <h1 className="text-5xl font-serif text-[#172F22] leading-tight mb-6">{pub.title}</h1>
          <time className="text-sm font-sans text-[#172F22]/50">{new Date(pub.published_at).toLocaleDateString()}</time>
        </header>
        
        <article 
          className="max-w-none font-sans text-[#172F22]/90 text-lg leading-loose [&>p]:mb-8 [&>p:first-of-type]:editorial-dropcap [&>h2]:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-[#172F22] [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:border-b [&>h2]:border-[#172F22]/10 [&>h2]:pb-1 [&>h3]:text-2xl [&>h3]:font-serif [&>h3]:font-normal [&>h3]:mt-10 [&>h3]:mb-4"
          dangerouslySetInnerHTML={{ __html: pub.content }}
        />
        
        <footer id="citations" className="mt-24 pt-12 border-t border-divider">
            <h4 className="font-serif text-xl mb-4 text-[#172F22]">Citations</h4>
            <ol className="list-decimal pl-5 font-sans text-sm text-[#172F22]/70 space-y-2">
              {pub.citations.map((cite, index) => (
                <li key={index}>{cite}</li>
              ))}
            </ol>
        </footer>
      </div>

      {/* Sticky Table of Contents & Reading Progress Bar */}
      <TableOfContents sections={pub.sections} />
    </div>
  );
}
