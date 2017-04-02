module Components.Demo where

-- | import Prelude
import Halogen as H
import Halogen.HTML as HH
-- | import Halogen.HTML.Properties as HP
-- | import Halogen.HTML.Events as HE

demo :: forall m. H.Component HH.HTML m
demo = 
  H.component
    { render }
  where

  render :: H.ComponentHTML
  render = 
    HH.div_
      [ HH.h1_ [ HH.text "Hello Halogen" ] ]