import gql from 'graphql-tag';

export const grantsQuery = gql`
  query publicGrants {
    grants {
      id
      translation
      grant_url
      grant_number
      issuer
      issuer_url
      created_at
      owners {
        id
        name
        login
        intl_name
        email
      }
    }
    user {
      id
    }
  }
`;

export const createGrantPermissionMutation = gql`
  mutation getGrantPermission($grantId: Int!) {
    create_grant_permission(grant_id: $grantId) {
      triumph
    }
  }
`;

export const getUserRequestsQuery = gql`
  query userRequests {
    userrequests {
      id
      created_at
      type
      sender_id
      recipient_id
      broadcast_uuid
      message
      subject {
        grant_id
        user_id
        org_id
        dictionary_id
      }
    }
    users {
      id
      intl_name
    }
    grants {
      id
      translation
      grant_url
      grant_number
      issuer
      issuer_url
      created_at
    }
    dictionaries {
      id
      translation
    }
  }
`;

export const acceptMutation = gql`
  mutation AcceptUserRequest($id: Int!, $accept: Boolean!) {
    accept_userrequest(id: $id, accept: $accept) {
      triumph
    }
  }
`;
