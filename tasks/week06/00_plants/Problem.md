
# Plants

## Plant

It has the following constructor: Plant(double height, String species)

A plant has the following fields: `alive` (boolean), `height` (float), `uprooted` (boolean), `species` (string), `isWeed()` (by default the method should return false ) and uproot() (changes the state of uprooted to true)

For fields such as alive, height, species, these properties should be marked as private and only be accessible via getters and setters (isAlive, kill, getHeight,  getSpecies, uprooted ) . isWeed and uproot methods must be public.

You will need to override the `.compare(other)` method for comparison and ensure that two plants are the same if they hold the same attribtues:

* alive
* species
* height
* uprooted

If any of the criteria is different, the `.compare` method should return false.


## Weed

A Weed is a type of Plant which is considered undesirable. The Gardener class will be looking at different Weeds to remove from the garden.

A weed is also a kind of plant and should be something that could be amongst plants which are both weeds or not.

It should invoke the `Plant` class constructor but override the `isWeed` method.

## Gardener

This class contains the main method and a method for public void `uprootWeeds(garden)` which will mark any weeds using `uproot()` method.

The Gardener class has no constructor.

The gardener will also check if plants are dead and remove any dead plants and weeds in the `removeUndesirables(garden)`.


