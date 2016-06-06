(ns serpent-talk.talk
  (:require [camel-snake-kebab.core :as csk])
  )

(defn serpent-talk [input]
  (csk/->snake_case "hello pigeon"))

