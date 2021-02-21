import {ref} from "vue";

/**
 * Create an object providing an interface for subscribing to/triggering Vue updates
 * 
 * @return {{subscribe: (function(): number), trigger: (function(): number)}}
 */
const useWithOnDemandUpdates = () => {
  //Abuse the way vue detects reactivity, vue checks which refs were accessed during computed calculation
  //changing our ref should thus force computed re-calculation
  const _updateCounter = ref(0);

  /**
   * Subscribe to on demand updates
   */
  const subscribe = () => {
    _updateCounter.value;
  };

  /**
   * Trigger an on demand update
   */
  const trigger = () => {
    _updateCounter.value++;
  };

  return {
    subscribe,
    trigger
  }
}

export { useWithOnDemandUpdates }