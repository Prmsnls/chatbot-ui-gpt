import { Message } from '@/types/chat';
import { OpenAIModel } from '@/types/openai';

export const OpenAIStream = async () => {
  const res = await fetch(`https://api.permissionless.net/api/v1/generate`, {
    // headers: {
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${key ? key : process.env.OPENAI_API_KEY}`,
    //   ...(process.env.OPENAI_ORGANIZATION && {
    //     'OpenAI-Organization': process.env.OPENAI_ORGANIZATION,
    //   }),
    // },
    method: 'POST',
    body: JSON.stringify({
      prompt: 'In order to make homemade bread, follow these steps:\n1)',
      max_new_tokens: 250,
      preset: 'None',
      do_sample: true,
      temperature: 0.7,
      top_p: 0.1,
      typical_p: 1,
      epsilon_cutoff: 0,
      eta_cutoff: 0,
      tfs: 1,
      top_a: 0,
      repetition_penalty: 1.18,
      top_k: 40,
      min_length: 0,
      no_repeat_ngram_size: 0,
      num_beams: 1,
      penalty_alpha: 0,
      length_penalty: 1,
      early_stopping: false,
      mirostat_mode: 0,
      mirostat_tau: 5,
      mirostat_eta: 0.1,
      seed: -1,
      add_bos_token: true,
      truncation_length: 2048,
      ban_eos_token: false,
      skip_special_tokens: true,
      stopping_strings: [],
    }),
  }).then((res) => {
    return res;
  });

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  if (res.status !== 200) {
    const statusText = res.statusText;
    const result = await res.body?.getReader().read();
    throw new Error(
      `OpenAI API returned an error: ${
        decoder.decode(result?.value) || statusText
      }`,
    );
  }

  return res;
};

// w68BXc98ws6QsJjxRZNdT3BlbkFJRlJrhlHmKIFyino8Oryw;
