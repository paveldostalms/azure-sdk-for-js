/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const CreateRoomRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateRoomRequest",
    modelProperties: {
      validFrom: {
        serializedName: "validFrom",
        type: {
          name: "DateTime",
        },
      },
      validUntil: {
        serializedName: "validUntil",
        type: {
          name: "DateTime",
        },
      },
      pstnDialOutEnabled: {
        serializedName: "pstnDialOutEnabled",
        type: {
          name: "Boolean",
        },
      },
      participants: {
        serializedName: "participants",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParticipantProperties" },
          },
        },
      },
    },
  },
};

export const ParticipantProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParticipantProperties",
    modelProperties: {
      role: {
        serializedName: "role",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Presenter", "Attendee", "Consumer", "Collaborator"],
        },
      },
    },
  },
};

export const RoomModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomModel",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String",
        },
      },
      createdAt: {
        serializedName: "createdAt",
        required: true,
        type: {
          name: "DateTime",
        },
      },
      validFrom: {
        serializedName: "validFrom",
        required: true,
        type: {
          name: "DateTime",
        },
      },
      validUntil: {
        serializedName: "validUntil",
        required: true,
        type: {
          name: "DateTime",
        },
      },
      pstnDialOutEnabled: {
        serializedName: "pstnDialOutEnabled",
        required: true,
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError",
        },
      },
    },
  },
};

export const CommunicationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationError",
            },
          },
        },
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError",
        },
      },
    },
  },
};

export const RoomsCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoomModel",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UpdateRoomRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateRoomRequest",
    modelProperties: {
      validFrom: {
        serializedName: "validFrom",
        type: {
          name: "DateTime",
        },
      },
      validUntil: {
        serializedName: "validUntil",
        type: {
          name: "DateTime",
        },
      },
      pstnDialOutEnabled: {
        serializedName: "pstnDialOutEnabled",
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const ParticipantsCollection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParticipantsCollection",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoomParticipant",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoomParticipant: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomParticipant",
    modelProperties: {
      rawId: {
        serializedName: "rawId",
        required: true,
        type: {
          name: "String",
        },
      },
      role: {
        serializedName: "role",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Presenter", "Attendee", "Consumer", "Collaborator"],
        },
      },
    },
  },
};

export const UpdateParticipantsRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpdateParticipantsRequest",
    modelProperties: {
      participants: {
        serializedName: "participants",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParticipantProperties" },
          },
        },
      },
    },
  },
};

export const RoomsCreateExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomsCreateExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoomsListExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomsListExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoomsGetExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomsGetExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoomsUpdateExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomsUpdateExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoomsDeleteExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomsDeleteExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const RoomsListNextExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoomsListNextExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ParticipantsListExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParticipantsListExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ParticipantsUpdateExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParticipantsUpdateExceptionHeaders",
    modelProperties: {
      errorCode: {
        serializedName: "x-ms-error-code",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ParticipantsListNextExceptionHeaders: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "ParticipantsListNextExceptionHeaders",
      modelProperties: {
        errorCode: {
          serializedName: "x-ms-error-code",
          type: {
            name: "String",
          },
        },
      },
    },
  };
