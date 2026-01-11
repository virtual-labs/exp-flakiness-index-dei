<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
  };
</script>


### Theory

The flakiness index of aggregate is defined as the percentage by weight of the particles of aggregate whose least dimension (thickness) is less than 0.6 of their mean dimensions. Flakiness is a shape property of aggregates that directly influences their performance in concrete and pavement construction.

Flaky particles are those aggregate pieces in which the thickness (smallest dimension) is substantially less than the width and length. When the minimum dimension is less than three-fifths (0.6 times) of the mean dimension, the particle is classified as flaky and considered undesirable for construction purposes.

### Mechanism

The flakiness test identifies problematic particle shapes through dimensional assessment:

#### 1. Shape Assessment

Aggregates are separated into size fractions based on their nominal dimensions determined by sieving through standard IS sieves.

#### 2. Mean Dimension Calculation

For each size fraction, the mean dimension is calculated as the average of the two sieve sizes between which particles are retained. This represents the characteristic size of particles in that fraction.

#### 3. Critical Thickness Determination

The gauge thickness (critical dimension) is established as 0.6 times the mean dimension. This 60% ratio represents the threshold below which particles are considered unacceptably flat.

#### 4. Dimensional Gauging

Each particle is tested by attempting to pass it through a slot of width equal to the critical thickness, with the particle oriented so its minimum dimension is perpendicular to the slot. Particles that pass through are classified as flaky.

#### 5. Quantification

The mass of flaky particles is expressed as a percentage of the total sample mass, providing a quantitative measure of shape unsuitability.

### Evaluation Parameters

This process evaluates:

- Structural weakness potential: Flaky particles create planes of weakness when oriented horizontally under compaction  
- Breaking susceptibility: Thin sections are prone to fracture under compressive and impact loads  
- Packing efficiency: Flat particles result in poor interlocking and excessive void formation  
- Workability impact: Flaky shapes increase water demand and reduce concrete flow  
- Bonding capacity: Limited surface contact area weakens adhesion with cement paste or bitumen  
- Durability concerns: Thin sections are more vulnerable to abrasion, weathering, and chemical attack  

### Formulas

#### Mean Dimension Calculation

$$
\text{Mean Dimension} = \frac{\text{Size of sieve through which particle passes} + \text{Size of sieve on which particle is retained}}{2}
$$

#### Gauge Thickness (Critical Thickness)

$$
\text{Gauge Thickness} = 0.6 \times \text{Mean Dimension}
$$

#### Individual Fraction Flakiness Index

$$
\text{Flakiness Index for Fraction} = \frac{y_i}{Y_i} \times 100
$$

Where:  
- $y_i$ = Weight of flaky material passing gauge for that fraction (g)  
- $Y_i$ = Total weight of that fraction tested (g)  

#### Overall Flakiness Index

$$
\text{Flakiness Index (FI)} = \frac{B}{A} \times 100
$$

Where:  
- $A$ = Total weight of sample taken  
  $= Y_1 + Y_2 + Y_3 + \dots + Y_n$ (g)  
- $B$ = Total weight of material passing through various slots  
  $= y_1 + y_2 + y_3 + \dots + y_n$ (g)  

#### Alternative Expression

$$
\text{Flakiness Index (\%)} =
\frac{y_1 + y_2 + y_3 + \dots + y_n}
{Y_1 + Y_2 + Y_3 + \dots + Y_n}
\times 100
$$
