module Components.Demo where

import Prelude
-- | import Halogen.HTML.Properties as HP
-- | import Halogen.HTML.Events as HE
import Halogen as H
import Halogen.HTML as HH
import Data.Const (Const)
import Data.Newtype (unwrap)
import Data.Maybe (Maybe(..))


demo :: forall m. H.Component HH.HTML (Const Void) Unit Void m
demo = 
  H.component
    { initialState: const unit
    , render: const $ HH.div_ [ HH.h1_ [ HH.text "Hello Halogen" ] ]
    , eval: absurd <<< unwrap
    , receiver: const Nothing
    }
    